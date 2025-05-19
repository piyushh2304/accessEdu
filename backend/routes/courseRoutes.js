

const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const jwt = require('jsonwebtoken');

// Middleware to authenticate requests
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};


// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/:id/upload-video', authenticate, async (req, res) => {
  try {
    // Assuming file is sent via multipart form-data; use multer for file handling
    const file = req.file; // Requires multer middleware setup
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `courses/${req.params.id}/${file.originalname}`,
      Body: file.buffer,
    };
    const result = await s3.upload(params).promise();
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { videoUrl: result.Location },
      { new: true }
    );
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Video upload failed', error: error.message });
  }
});


// Get course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create course (instructor only, add role check if needed)
router.post('/', authenticate, async (req, res) => {
  try {
    const course = new Course({ ...req.body, instructor: req.userId });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update course
router.put('/:id/video', authenticate, async (req, res) => {
  try {
    const { videoUrl } = req.body;
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { videoUrl },
      { new: true }
    );
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete course
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Enroll in course
router.put('/:id/enroll', authenticate, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    if (!course.enrolledStudents.includes(req.userId)) {
      course.enrolledStudents.push(req.userId);
      await course.save();
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
  
});


module.exports = router;
