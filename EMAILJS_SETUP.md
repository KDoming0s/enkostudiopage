# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., `service_enko_studio`)

## 3. Create Email Template
1. Go to Email Templates in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{user_name}} <{{user_email}}>

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID** (e.g., `template_contact`)

## 4. Update Configuration
Update the values in `src/lib/emailjs-config.js`:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'cWok2-a98ILsFqGHU', // Already set
  SERVICE_ID: 'your_service_id_here', // Replace with your service ID
  TEMPLATE_ID: 'your_template_id_here', // Replace with your template ID
};
```

## 5. Update the Contact Form
In `src/app/page.js`, update the EmailJS service call around line 60:

```javascript
const result = await emailjs.sendForm(
  'your_service_id_here', // Replace with your service ID
  'your_template_id_here', // Replace with your template ID
  form.current,
  'cWok2-a98ILsFqGHU' // Your public key (already set)
);
```

## 6. Test the Form
1. Run your Next.js application
2. Fill out the contact form
3. Check your email for the test message
4. Check EmailJS dashboard for delivery status

## Template Variables
Make sure your EmailJS template includes these variables:
- `{{user_name}}` - Sender's name
- `{{user_email}}` - Sender's email  
- `{{subject}}` - Email subject
- `{{message}}` - Email message

## Troubleshooting
- Check browser console for errors
- Verify service and template IDs are correct
- Ensure your email service is properly connected
- Check EmailJS dashboard for error logs
```

Now let's create a simple utility function for better error handling:

```javascript:src/lib/email-utils.js
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailjs-config';

export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

export const sendContactEmail = async (formRef) => {
  if (!formRef.current) {
    throw new Error('Form reference is not available');
  }

  try {
    const result = await emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      formRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (result.status === 200) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      throw new Error(`EmailJS returned status: ${result.status}`);
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    // Return user-friendly error messages
    if (error.text) {
      return { success: false, message: `Failed to send email: ${error.text}` };
    } else if (error.message) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: 'An unexpected error occurred. Please try again.' };
    }
  }
};
```

Finally, let's update the main page to use the utility functions:

```javascript:src/app/page.js
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, User, Code, Mail, ChevronDown, Send } from 'lucide-react';
import { initializeEmailJS, sendContactEmail } from '@/lib/email-utils';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const form = useRef(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    initializeEmailJS();
  }, []);

  // SEO: Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ENKO Studio",
    "url": "https://enkostudios.com",
    "logo": "https://enkostudios.com/logo.png",
    "description": "Creative digital studio specializing in UI/UX design, web development, and brand identity. We transform ideas into memorable digital experiences.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@enkostudios.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/enko-studio",
      "https://twitter.com/enkostudio",
      "https://instagram.com/enkostudio"
    ],
    "areaServed": "Worldwide",
    "serviceType": [
      "UI/UX Design",
      "Web Development",
      "Brand Identity",
      "Digital Marketing",
      "Mobile App Development"
    ]
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitMessage('');

    try {
      const result = await sendContactEmail(form);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        form.current?.reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your component code remains the same...
  // (projects, services, theme classes, etc.)

  const projects = [
    { 
      title: "E-commerce Platform", 
      category: "Web Design", 
      description: "Modern e-commerce solution with intuitive user experience and conversion optimization",
      image: "/api/placeholder/300/200" 
    },
    { 
      title: "Mobile Banking App", 
      category: "UI/UX Design", 
      description: "Secure and user-friendly mobile banking application with advanced features",
      image: "/api/placeholder/300/200" 
    },
    { 
      title: "Brand Identity", 
      category: "Branding", 
      description: "Complete brand identity system including logo, colors, and brand guidelines",
      image: "/api/placeholder/300/200" 
    },
    { 
      title: "Dashboard Analytics", 
      category: "Web Design", 
      description: "Data visualization dashboard with real-time analytics and reporting",
      image: "/api/placeholder/300/200" 
    },
    { 
      title: "Social Media App", 
      category: "Mobile Design", 
      description: "Engaging social media platform with innovative user interaction features",
      image: "/api/placeholder/300/200" 
    },
    { 
      title: "Healthcare Portal", 
      category: "UI/UX Design", 
      description: "Patient-centered healthcare portal with appointment scheduling and medical records",
      image: "/api/placeholder/300/200" 
    }
  ];

  const services = [
    { 
      icon: <User className="w-8 h-8" />, 
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that drive conversions and user satisfaction"
    },
    { 
      icon: <Code className="w-8 h-8" />, 
      title: "Web Development",
      description: "Building responsive, fast, and SEO-optimized web applications using modern technologies"
    },
    { 
      icon: <Mail className="w-8 h-8" />, 
      title: "Brand Identity",
      description: "Developing cohesive brand experiences that resonate with your target audience"
    }
  ];

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200';

  // Add structured data to head
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}