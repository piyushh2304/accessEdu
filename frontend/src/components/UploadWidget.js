import React, { useRef, useEffect, useState } from 'react';
import { courseService } from '../services/api';

const UploadWidget = ({ courseId, onUploadSuccess }) => {
  const cloudRef = useRef();
  const widgetRef = useRef();
  const [uploadStatus, setUploadStatus] = useState('idle');

  useEffect(() => {
    cloudRef.current = window.cloudinary;
    widgetRef.current = cloudRef.current.createUploadWidget(
      {
        cloudName: 'du8p7quyg', // Your Cloudinary cloud name
        uploadPreset: 'video', // Your upload preset
        sources: ['local', 'url', 'camera'],
        multiple: false,
        resourceType: 'video',
        maxFileSize: 100000000, // 100MB max file size
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          const videoUrl = result.info.secure_url;
          setUploadStatus('success');
          // Update the course with the video URL via backend API
          courseService.updateCourseVideo(courseId, videoUrl)
            .then(() => {
              onUploadSuccess(videoUrl);
              console.log('Video uploaded and course updated:', videoUrl);
            })
            .catch(err => {
              console.error('Failed to update course:', err);
              setUploadStatus('error');
            });
        } else if (error) {
          setUploadStatus('error');
          console.error('Upload error:', error);
        }
      }
    );
  }, [courseId, onUploadSuccess]);

  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload Video</button>
      {uploadStatus === 'success' && <p>Video uploaded successfully!</p>}
      {uploadStatus === 'error' && <p>Error uploading video. Please try again.</p>}
    </div>
  );
};

export default UploadWidget;
