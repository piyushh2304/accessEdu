const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a course title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: [
      {
        title: { type: String, required: true },
        type: { 
          type: String, 
          enum: ['video', 'document', 'quiz', 'assignment'],
          required: true 
        },
        url: { type: String },
        description: { type: String },
        accessibilityFeatures: {
          captions: { type: Boolean, default: false },
          audioDescription: { type: Boolean, default: false },
          transcripts: { type: Boolean, default: false },
          signLanguage: { type: Boolean, default: false },
        },
      },
    ],
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    accessibilityLevel: {
      type: String,
      enum: ['basic', 'enhanced', 'comprehensive'],
      default: 'basic',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course', courseSchema);
