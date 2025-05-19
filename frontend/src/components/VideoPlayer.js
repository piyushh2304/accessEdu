import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MuxPlayer from '@mux/mux-player-react';
import Navigation3 from '../components/Navigation3';
import { courseService } from '../services/api';

const VideoPlayer = () => {
  const { courseId } = useParams();
  const [playbackId, setPlaybackId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const playerRef = useRef(null);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Get navigation bar height after render
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [loading]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseData = await courseService.getCourseById(courseId);
        // Extract playback ID from Mux URL
        const playbackIdMatch = courseData.videoUrl.match(/stream\.mux\.com\/([^.]+)\.m3u8/);
        if (playbackIdMatch && playbackIdMatch[1]) {
          setPlaybackId(playbackIdMatch[1]);
        }
        setCourseName(courseData.name || 'Unknown Course');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course data:', error);
        setError('Failed to load course video. Please try again later.');
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) return <div>Loading video...</div>;
  if (error) return <div>{error}</div>;
  if (!playbackId) return <div>No video available for this course.</div>;

  return (
    <div className="page-container" style={{ 
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }}>
      <div ref={navRef}>
        <Navigation3 />
      </div>
      
      <div className="video-container" style={{ 
        flex: "1",
        backgroundColor: "#000",
        position: "relative",
        width: "100%",
        height:'80%'
      }}>
        <MuxPlayer
          ref={playerRef}
          playbackId={playbackId}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
          metadata={{
            video_title: courseName,
            viewer_user_id: 'anonymous'
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
