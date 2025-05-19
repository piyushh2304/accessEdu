import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance for captions API
const captionsApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Service for managing captions
export const captionsService = {
  // Request caption generation for a video
  generateCaptions: async (videoUrl, courseId, assetId = 'LgAksKEB42MJJnwp3T8mUGnbMkfDIec8l7So7Sj00C600') => {
    try {
      const response = await captionsApi.post('/mux/generate-captions', { videoUrl, courseId, assetId });
      return response.data;
    } catch (error) {
      console.error('Error generating captions:', error.response ? error.response.data : error.message);
      throw new Error(error.response ? error.response.data.error : 'Failed to generate captions');
    }
  },

  // Check caption generation status
  checkCaptionStatus: async (trackId) => {
    try {
      const response = await captionsApi.get(`/mux/caption-status/${trackId}`);
      return response.data;
    } catch (error) {
      console.error('Error checking caption status:', error.response ? error.response.data : error.message);
      throw new Error(error.response ? error.response.data.error : 'Failed to check caption status');
    }
  },
};

export default captionsService;
