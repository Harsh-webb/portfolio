import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  MessageSquare,
  Clock
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState('');

  const contactInfo = {
    email: 'harshsingh7543810314@gmail.com',
    phone: '+91-7543810314',
    location: 'Noida, Uttar Pradesh, India'
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please provide a subject line (at least 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Structure ready for backend/EmailJS integration
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    console.log('Contact form payload prepared:', formData);

    setIsSubmitted(true);
    // Reset form fields
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project, opportunity or collaboration in mind? Feel free to get in touch.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="glass-card contact-info-card">
            <div className="contact-header-text">
              <h3>Get In Touch</h3>
              <p>
                I am actively seeking Full Stack Developer roles, technical projects, 
                and innovative engineering teams to contribute to.
              </p>
            </div>

            <div className="contact-items-list">
              {/* Email */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-val">
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(contactInfo.email, 'email')}
                  className="social-icon-btn"
                  title="Copy email to clipboard"
                  style={{ width: '32px', height: '32px' }}
                >
                  {copiedItem === 'email' ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-val">
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                  className="social-icon-btn"
                  title="Copy phone number to clipboard"
                  style={{ width: '32px', height: '32px' }}
                >
                  {copiedItem === 'phone' ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-val">{contactInfo.location}</div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(56, 189, 248, 0.05)',
              border: '1px solid rgba(56, 189, 248, 0.15)',
              borderRadius: '10px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Clock size={20} color="var(--accent-cyan)" />
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                <strong>Availability:</strong> Immediate joining for full-time Full Stack or React/Python roles.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="glass-card contact-form-card">
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#34d399',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <CheckCircle size={32} />
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                  Thank you for reaching out. Harsh will review your message and respond as promptly as possible.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                  <a 
                    href={`mailto:${contactInfo.email}?subject=Inquiry%20regarding%20Full%20Stack%20Role`}
                    className="btn btn-primary btn-sm"
                  >
                    Direct Email Client
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className="form-input"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. jane@company.com"
                    className="form-input"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    className="form-input"
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Your Message <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Hello Harsh, I came across your portfolio and would like to connect regarding..."
                    className="form-textarea"
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
