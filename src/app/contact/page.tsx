"use client"
import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Reuse the background elements generation from the projects page
const generateBackgroundElements = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (i * 73) % 100,
    top: (i * 47) % 100,
    width: 50 + ((i * 83) % 100),
    height: 50 + ((i * 83) % 100),
    animationDelay: (i * 0.1) % 5,
    animationDuration: 5 + ((i * 89) % 10)
  }));
};

const backgroundElements = generateBackgroundElements(50);

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {backgroundElements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-primary-500/10 animate-pulse"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.width}px`,
            height: `${element.height}px`,
            animationDelay: `${element.animationDelay}s`,
            animationDuration: `${element.animationDuration}s`,
          }}
        />
      ))}
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Header section */}
          <div className="text-center mb-12">
            <h1 className="mt-16 text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 dark:from-primary-300 dark:via-primary-200 dark:to-secondary-300 bg-clip-text text-transparent animate-gradient-x"
                style={{
                  animationDuration: '6s',
                  backgroundSize: '150%',
                }}>
                Contact Me
              </span>
              <span className="text-primary-500 dark:text-primary-300 animate-pulse" style={{ animationDuration: '2s' }}>.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Let's start a conversation</p>
          </div>

          {/* Form section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-8">
            {isSubmitted && (
              <Alert className="mb-6 bg-green-100 dark:bg-green-900/30 border-green-500">
                <AlertDescription className="text-green-700 dark:text-green-300">
                  Thank you for your message! I'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
                  placeholder="youremail@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
                  placeholder="Your message here..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-[1.02]"
                >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;