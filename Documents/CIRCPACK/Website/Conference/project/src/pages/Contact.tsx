import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };
      
      // Auto-fill company based on email domain
      if (name === 'email' && value.includes('@')) {
        const domain = value.split('@')[1];
        if (domain) {
          // Extract company name from domain (remove .com, .org, etc.)
          const companyName = domain.split('.')[0];
          newData.company = companyName.charAt(0).toUpperCase() + companyName.slice(1);
        }
      }
      
      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    const submissionData = {
      ...formData,
      specificService: selectedSubService
    };
    console.log('Form submitted:', submissionData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      });
      setSelectedSubService('');
    }, 3000);
  };

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'recyclability-assessments', label: 'Recyclability Assessments' },
    { value: 'recycling-intelligence', label: 'Recycling Intelligence' },
    { value: 'recycling-academy', label: 'Recycling Academy' },
    { value: 'other', label: 'Other' }
  ];

  const subServices = {
    'recyclability-assessments': [
      { value: 'recyclability-assessments', label: 'General Recyclability Assessment' },
      { value: 'recyclability-assessments', label: 'RecyClass Certification' },
      { value: 'recyclability-assessments', label: 'How2Recycle Certification' },
      { value: 'recyclability-assessments', label: 'APR Design Guide Assessment' },
      { value: 'recyclability-assessments', label: 'Custom Testing & Analysis' }
    ],
    'recycling-intelligence': [
      { value: 'recycling-intelligence', label: 'EPR System Analysis' },
      { value: 'recycling-intelligence', label: 'Legislation Updates & Compliance' },
      { value: 'recycling-intelligence', label: 'Market Intelligence Reports' },
      { value: 'recycling-intelligence', label: 'Recycling Rate Data' },
      { value: 'recycling-intelligence', label: 'Country-Specific Guidance' }
    ],
    'recycling-academy': [
      { value: 'recycling-academy', label: 'Masterclass Series' },
      { value: 'recycling-academy', label: 'Online Courses' },
      { value: 'recycling-academy', label: 'Custom Training Programs' },
      { value: 'recycling-academy', label: 'Workshop Sessions' },
      { value: 'recycling-academy', label: 'Certification Programs' }
    ],
    'other': [
      { value: 'other', label: 'General Inquiry' },
      { value: 'other', label: 'Partnership Opportunities' },
      { value: 'other', label: 'Speaking Engagements' },
      { value: 'other', label: 'Media Inquiries' },
      { value: 'other', label: 'Other Services' }
    ]
  };

  // Auto-generate subject based on selected service
  const generateSubject = (service: string, subService: string) => {
    if (!service || !subService) return '';
    return `Inquiry about ${subService}`;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Thank You!</h2>
          <p className="text-gray-600 max-w-md">
            Your message has been sent successfully. We'll get back to you within 24-48 hours.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-[#00A6B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0095A1] transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Back to Home Button */}
      <section className="pt-8 pb-4 px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-[#00A6B2] hover:text-[#0095A1] font-medium transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll respond within 24-48 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            {/* Hidden company field - auto-filled from email domain */}
            <input
              type="hidden"
              name="company"
              value={formData.company}
            />

            <div className="space-y-4 mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Service of Interest
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceOptions.slice(1).map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, service: option.value }));
                        setSelectedSubService('');
                      }}
                      className={`p-6 rounded-2xl text-left font-semibold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                        formData.service === option.value
                          ? option.value === 'recyclability-assessments'
                            ? 'bg-[#78B94C] text-white shadow-lg'
                            : option.value === 'recycling-intelligence'
                            ? 'bg-[#00A6D6] text-white shadow-lg'
                            : option.value === 'recycling-academy'
                            ? 'bg-[#9E4F9E] text-white shadow-lg'
                            : 'bg-[#00A6B2] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent hover:border-gray-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                
                {/* Sub-service selection */}
                {formData.service && subServices[formData.service as keyof typeof subServices] && (
                  <div className="mt-6 space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Specific Service
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {subServices[formData.service as keyof typeof subServices].map((subOption, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedSubService(subOption.label);
                            setFormData(prev => ({
                              ...prev,
                              subject: generateSubject(formData.service, subOption.label)
                            }));
                          }}
                          className={`p-4 rounded-xl text-left font-medium text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                            selectedSubService === subOption.label
                              ? formData.service === 'recyclability-assessments'
                                ? 'bg-[#78B94C] text-white shadow-md'
                                : formData.service === 'recycling-intelligence'
                                ? 'bg-[#00A6D6] text-white shadow-md'
                                : formData.service === 'recycling-academy'
                                ? 'bg-[#9E4F9E] text-white shadow-md'
                                : 'bg-[#00A6B2] text-white shadow-md'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {subOption.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Hidden subject field - auto-filled from service selection */}
            <input
              type="hidden"
              name="subject"
              value={formData.subject}
            />

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                placeholder="Please provide details about your project, timeline, and specific requirements..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 bg-[#FF6600] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E55A00] transition-colors duration-300 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;