const express = require('express');
const router = express.Router();
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  enrollCourse,
} = require('../controllers/courseController');
const { protect, teacher } = require('../middleware/authMiddleware');

router.route('/')
  .get(getCourses)
  .post(protect, teacher, createCourse);

router.route('/:id')
  .get(getCourseById)
  .put(protect, teacher, updateCourse)
  .delete(protect, teacher, deleteCourse);

router.route('/:id/enroll')
  .put(protect, enrollCourse);

module.exports = router;
