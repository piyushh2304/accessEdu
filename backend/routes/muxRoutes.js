const express = require('express');
const router = express.Router();
const axios = require('axios');

// Mux API base URL
const MUX_API_BASE_URL = 'https://api.mux.com/video/v1';

// Mux API credentials from environment variables
const MUX_ACCESS_TOKEN_ID = process.env.MUX_ACCESS_TOKEN_ID;
const MUX_SECRET_KEY = process.env.MUX_SECRET_KEY;

// Basic authentication for Mux API
const muxAuth = {
  username: MUX_ACCESS_TOKEN_ID,
  password: MUX_SECRET_KEY
};

// In-memory store for tracking caption generation status (replace with database in production)
const captionStatusStore = {};

// Endpoint to generate or retrieve captions for a Mux asset
router.post('/generate-captions', async (req, res) => {
  try {
    const { videoUrl, courseId, assetId } = req.body;
    if (!videoUrl && !assetId) {
      return res.status(400).json({ error: 'Either videoUrl or assetId is required' });
    }

    let finalAssetId = assetId;

    // If assetId is not provided, extract Playback ID from videoUrl and map to Asset ID
    if (!finalAssetId && videoUrl) {
      const playbackIdMatch = videoUrl.match(/stream\.mux\.com\/([^.]+)\.m3u8/);
      if (!playbackIdMatch || !playbackIdMatch[1]) {
        return res.status(400).json({ error: 'Invalid Mux playback URL or playback ID not found' });
      }
      const playbackId = playbackIdMatch[1];

      // List all assets to find the one matching the playback ID
      const listAssetsResponse = await axios.get(`${MUX_API_BASE_URL}/assets`, { auth: muxAuth });
      if (listAssetsResponse.status !== 200) {
        return res.status(500).json({ error: 'Failed to list Mux assets', details: listAssetsResponse.data });
      }

      const assets = listAssetsResponse.data.data || [];
      const asset = assets.find(a => a.playback_ids && a.playback_ids.some(p => p.id === playbackId));
      if (!asset) {
        return res.status(404).json({ error: 'Mux asset not found for this playback ID' });
      }
      finalAssetId = asset.id;
      console.log(`Found Mux asset with ID: ${finalAssetId} for playback ID: ${playbackId}`);
    } else if (finalAssetId) {
      console.log(`Using provided Asset ID: ${finalAssetId}`);
    }

    // Check if a text track for captions already exists
    const tracksResponse = await axios.get(`${MUX_API_BASE_URL}/assets/${finalAssetId}/text-tracks`, { auth: muxAuth });
    const existingTracks = tracksResponse.data.data || [];
    const existingCaptionTrack = existingTracks.find(track => track.text_type === 'subtitles' && track.language_code === 'en');

    if (existingCaptionTrack && existingCaptionTrack.status === 'ready') {
      // If captions already exist and are ready, return the URL
      const assetResponse = await axios.get(`${MUX_API_BASE_URL}/assets/${finalAssetId}`, { auth: muxAuth });
      const playbackId = assetResponse.data.data.playback_ids[0].id;
      const captionUrl = existingCaptionTrack.url || `https://stream.mux.com/${playbackId}/text/${existingCaptionTrack.id}.vtt`;
      console.log(`Captions already available for asset ${finalAssetId}: ${captionUrl}`);
      return res.json({ captionUrl });
    } else if (existingCaptionTrack) {
      // If track exists but is not ready, return pending status with track ID for polling
      captionStatusStore[existingCaptionTrack.id] = { assetId: finalAssetId, status: existingCaptionTrack.status };
      console.log(`Captions in progress for asset ${finalAssetId}, track ID: ${existingCaptionTrack.id}`);
      return res.json({ status: 'pending', trackId: existingCaptionTrack.id });
    }

    // If no caption track exists, request to generate captions
    const audioTracksResponse = await axios.get(`${MUX_API_BASE_URL}/assets/${finalAssetId}/tracks`, { auth: muxAuth });
    const audioTracks = audioTracksResponse.data.data || [];
    const audioTrack = audioTracks.find(track => track.type === 'audio');
    if (!audioTrack) {
      return res.status(400).json({ error: 'No audio track found for caption generation' });
    }
    const audioTrackId = audioTrack.id;

    const generateCaptionsResponse = await axios.post(
      `${MUX_API_BASE_URL}/assets/${finalAssetId}/tracks/${audioTrackId}/generate-subtitles`,
      {
        generated_subtitles: [
          {
            language_code: 'en',
            name: 'English CC'
          }
        ]
      },
      { auth: muxAuth }
    );

    if (generateCaptionsResponse.status !== 201 || !generateCaptionsResponse.data.data.id) {
      return res.status(500).json({ error: 'Failed to initiate caption generation', details: generateCaptionsResponse.data });
    }

    const trackId = generateCaptionsResponse.data.data.id;
    captionStatusStore[trackId] = { assetId: finalAssetId, status: 'preparing' };
    console.log(`Initiated caption generation for asset ${finalAssetId}, track ID: ${trackId}`);
    return res.json({ status: 'pending', trackId });
  } catch (error) {
    console.error('Error in generate-captions:', error.response ? error.response.data : error.message);
    return res.status(500).json({ error: 'Failed to generate captions', details: error.response ? error.response.data : error.message });
  }
});

// Endpoint to check caption generation status
router.get('/caption-status/:trackId', async (req, res) => {
  try {
    const { trackId } = req.params;
    const storedData = captionStatusStore[trackId];
    if (!storedData) {
      return res.status(404).json({ error: 'Track ID not found in store' });
    }

    const { assetId } = storedData;
    const tracksResponse = await axios.get(`${MUX_API_BASE_URL}/assets/${assetId}/text-tracks`, { auth: muxAuth });
    const tracks = tracksResponse.data.data || [];
    const track = tracks.find(t => t.id === trackId);

    if (!track) {
      return res.status(404).json({ error: 'Text track not found for this asset' });
    }

    captionStatusStore[trackId].status = track.status;
    if (track.status === 'ready') {
      // Retrieve playback ID for the asset
      const assetResponse = await axios.get(`${MUX_API_BASE_URL}/assets/${assetId}`, { auth: muxAuth });
      const playbackId = assetResponse.data.data.playback_ids[0].id;
      const captionUrl = track.url || `https://stream.mux.com/${playbackId}/text/${trackId}.vtt`;
      console.log(`Captions ready for asset ${assetId}: ${captionUrl}`);
      return res.json({ status: 'completed', captionUrl });
    }

    console.log(`Caption status for track ${trackId}: ${track.status}`);
    return res.json({ status: track.status });
  } catch (error) {
    console.error('Error in caption-status:', error.response ? error.response.data : error.message);
    return res.status(500).json({ error: 'Failed to check caption status', details: error.response ? error.response.data : error.message });
  }
});

module.exports = router;
