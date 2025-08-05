import express from 'express';
import { body, validationResult } from 'express-validator';
import Feedback from '../models/Feedback.js';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// Validation middleware
const validateFeedback = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('feedbackType').isIn(['general', 'bug', 'feature', 'other']).withMessage('Invalid feedback type'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5')
];

router.post('/', validateFeedback, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create new feedback entry
    const feedback = new Feedback(req.body);
    await feedback.save();

    // Send email notification
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `New Feedback: ${req.body.feedbackType}`,
      text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Type: ${req.body.feedbackType}
        Rating: ${req.body.rating}
        Message: ${req.body.message}
      `
    });

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully'
    });
  } catch (error) {
    console.error('Feedback form error:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting feedback'
    });
  }
});

export const feedbackRouter = router;
