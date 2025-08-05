interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface HireForm {
  name: string;
  email: string;
  company?: string;
  project: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FeedbackForm {
  name: string;
  email: string;
  feedbackType: 'general' | 'bug' | 'feature' | 'other';
  message: string;
  rating: number;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  async contact(data: ContactForm) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send contact form');
    }
    
    return response.json();
  },

  async hire(data: HireForm) {
    const response = await fetch(`${API_BASE_URL}/hire`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send hire request');
    }
    
    return response.json();
  },

  async feedback(data: FeedbackForm) {
    const response = await fetch(`${API_BASE_URL}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send feedback');
    }
    
    return response.json();
  },
};
