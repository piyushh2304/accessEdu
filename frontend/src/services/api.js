import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
   register: async (userData) => {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    if (response.data) {
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },
   login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data) {
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },

    logout: () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
  },
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user')) || null;
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('userToken');
  },
  
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
  
  updateProfile: async (userData) => {
    const response = await api.put('/auth/profile', userData);
    if (response.data) {
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },
  
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },
};

// Course services
// Mock course data store with hardcoded video URLs
// const courses = {
//   '1': { 
//     id: '1', 
//     name: 'Course1', 
//     videoUrl: ' https://res.cloudinary.com/du8p7quyg/video/upload/v1747207986/course_videos/course1.mp4' // Sample video URL for testing
//   },
//   '2': { 
//     id: '2', 
//     name: 'Course2', 
//     videoUrl: 'https://res.cloudinary.com/du8p7quyg/video/upload/v1747208009/course_videos/course2.mp4' // No video for this course initially, can be updated if needed
//   },
// };
const courses = {
  '1': {
    id: '1',
    name: 'Course1',
    videoUrl: 'https://stream.mux.com/zBjaUmd6BO02CwvhKw1yZCNgJOs5UIFdh00jDtK9MO5VY.m3u8' // Mux playback URL for Course1
  },
  '2': {
    id: '2',
    name: 'Course2',
    videoUrl: 'https://stream.mux.com/JUtUou1lbsZFk01jdVzOiWryIDa301Hwd02rhUYHMh5wAg.m3u8' // Original Cloudinary URL for Course2
  },
};

export const courseService = {
  // Fetch all courses
  getAllCourses: async () => {
    return new Promise((resolve) => {
      resolve(Object.values(courses));
    });
  },

  // Fetch course data by ID
  getCourseById: async (courseId) => {
    return new Promise((resolve, reject) => {
      const course = courses[String(courseId)];
      if (course) {
        resolve(course);
      } else {
        reject(new Error('Course not found'));
      }
    });
  },

  // Update course with video URL (if needed in future)
  updateCourseVideo: async (courseId, videoUrl) => {
    return new Promise((resolve, reject) => {
      if (courses[String(courseId)]) {
        courses[String(courseId)].videoUrl = videoUrl;
        resolve({ success: true });
      } else {
        reject(new Error('Course not found'));
      }
    });
  },
};

// Mock authService if needed (minimal implementation)
// export const authService = {
//   getCurrentUser: () => {
//     return JSON.parse(localStorage.getItem('user')) || null;
//   },
  // Add other auth methods if required
// };


export default api;
