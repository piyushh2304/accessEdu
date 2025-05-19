const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'du8p7quyg', // Replace with your Cloud Name
  api_key: '259993447286138', // Replace with your API Key
  api_secret: '3TRORYY6v7JDE7nlnOrf5Z6SLQM', // Replace with your API Secret
});

// Directory containing your video files
const videosDir = './videos'; // Replace with the path to your videos folder

// Output file to store the uploaded video URLs
const outputFile = './videos/video.json';

// Object to store video URLs with filenames as keys
const uploadedVideos = {};

// Function to upload a single video
async function uploadVideo(videoPath, videoName) {
  try {
    console.log(`Uploading ${videoName}...`);
    const result = await cloudinary.uploader.upload(videoPath, {
      resource_type: 'video',
      folder: 'course_videos', // Organize videos in a folder on Cloudinary
      public_id: videoName.split('.')[0], // Use filename (without extension) as public ID
    });
    console.log(`Uploaded ${videoName} successfully! Secure URL: ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${videoName}:`, error);
    return null;
  }
}

// Function to upload all videos in the directory
async function bulkUploadVideos() {
  try {
    const files = fs.readdirSync(videosDir);
    const videoFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.mp4', '.mov', '.avi', '.mkv'].includes(ext); // Filter for common video formats
    });

    console.log(`Found ${videoFiles.length} video files to upload.`);

    for (const videoFile of videoFiles) {
      const videoPath = path.join(videosDir, videoFile);
      const secureUrl = await uploadVideo(videoPath, videoFile);
      if (secureUrl) {
        uploadedVideos[videoFile] = secureUrl;
      }
      // Optional: Add a small delay to avoid rate limiting (adjust as needed)
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Save the uploaded URLs to a JSON file
    fs.writeFileSync(outputFile, JSON.stringify(uploadedVideos, null, 2), 'utf8');
    console.log(`Upload complete! URLs saved to ${outputFile}`);
  } catch (error) {
    console.error('Error during bulk upload:', error);
  }
}

// Run the bulk upload
bulkUploadVideos();
