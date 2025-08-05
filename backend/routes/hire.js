import express from 'express';
import { body, validationResult } from 'express-validator';
import Hire from '../models/Hire.js';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// Validation middleware
const validateHire = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('project').trim().notEmpty().withMessage('Project description is required'),
  body('budget').trim().notEmpty().withMessage('Budget is required'),
  body('timeline').trim().notEmpty().withMessage('Timeline is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

router.post('/', validateHire, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create new hire request entry
    const hire = new Hire(req.body);
    await hire.save();

    // Send email notification
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `New Hire Request: ${req.body.project}`,
      text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Company: ${req.body.company}
        Project: ${req.body.project}
        Budget: ${req.body.budget}
        Timeline: ${req.body.timeline}
        Message: ${req.body.message}
      `
    });

    res.status(201).json({
      success: true,
      message: 'Hire request submitted successfully'
    });
  } catch (error) {
    console.error('Hire form error:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting hire request'
    });
  }
});

export const hireRouter = router;
