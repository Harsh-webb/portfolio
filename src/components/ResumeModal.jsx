import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Layers 
} from 'lucide-react';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    // Open resume in a new tab for printing / saving as PDF
    const printWindow = window.open('/Harsh_Kumar_Resume.html', '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  const handleDownload = () => {
    // Trigger download of the HTML resume
    const link = document.createElement('a');
    link.href = '/Harsh_Kumar_Resume.html';
    link.download = 'Harsh_Kumar_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '840px', padding: '0', overflow: 'hidden' }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          background: '#090d18',
          borderBottom: '1px solid var(--border-light)'
        }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
              Harsh Kumar — Resume Preview
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
              Full Stack Developer • Verified Resume Profile
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button 
              onClick={handlePrint} 
              className="btn btn-primary btn-sm"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button 
              onClick={handleDownload} 
              className="btn btn-secondary btn-sm"
              title="Download Resume file"
            >
              <Download size={14} />
              <span>Download</span>
            </button>

            <button 
              onClick={onClose}
              className="social-icon-btn" 
              style={{ width: '32px', height: '32px' }}
              aria-label="Close resume preview"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Document View */}
        <div style={{
          padding: '32px',
          maxHeight: '75vh',
          overflowY: 'auto',
          background: '#0b101d',
          color: '#e2e8f0',
          fontSize: '13.5px',
          lineHeight: '1.6'
        }}>
          {/* Header block */}
          <div style={{ borderBottom: '2px solid rgba(56, 189, 248, 0.4)', paddingBottom: '16px', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase' }}>
              Harsh Kumar
            </h1>
            <div style={{ fontSize: '15px', color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '2px' }}>
              Full Stack Developer
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '8px', color: 'var(--text-secondary)', fontSize: '12.5px' }}>
              <span>📍 Noida, Uttar Pradesh, India</span>
              <span>📞 +91-7543810314</span>
              <span>✉️ harshsingh7543810314@gmail.com</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.6px', marginBottom: '6px', fontWeight: 700 }}>
              Professional Summary
            </h4>
            <p style={{ color: 'var(--text-secondary)' }}>
              Full Stack Developer with hands-on experience building responsive web applications, RESTful APIs, and modern user interfaces through academic projects, internships, and professional training. Skilled in React.js, Python, Django, REST APIs, MySQL, and modern JavaScript.
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.6px', marginBottom: '8px', fontWeight: 700 }}>
              Technical Skills
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', rowGap: '6px', fontSize: '13px' }}>
              <strong style={{ color: '#ffffff' }}>Languages:</strong>
              <span style={{ color: 'var(--text-secondary)' }}>Python, JavaScript ES6+, HTML5, CSS3, SQL</span>

              <strong style={{ color: '#ffffff' }}>Frontend:</strong>
              <span style={{ color: 'var(--text-secondary)' }}>React.js, HTML5, CSS3, JavaScript, Responsive Web Design</span>

              <strong style={{ color: '#ffffff' }}>Backend:</strong>
              <span style={{ color: 'var(--text-secondary)' }}>Python, Django, REST APIs</span>

              <strong style={{ color: '#ffffff' }}>Database:</strong>
              <span style={{ color: 'var(--text-secondary)' }}>MySQL</span>

              <strong style={{ color: '#ffffff' }}>Tools:</strong>
              <span style={{ color: 'var(--text-secondary)' }}>Git, GitHub, VS Code</span>

              <strong style={{ color: '#ffffff' }}>Core CS:</strong>
              <span style={{ color: 'var(--text-secondary)' }}>Data Structures & Algorithms, Object-Oriented Programming, DBMS</span>
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.6px', marginBottom: '8px', fontWeight: 700 }}>
              Work Experience
            </h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#ffffff' }}>
              <span>DUCCAT INDIA — Noida, India</span>
              <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>Sep 2025 – Apr 2026</span>
            </div>
            <div style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '12.5px', marginBottom: '6px' }}>
              Full Stack Developer Intern
            </div>
            <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)' }}>
              <li>Completed hands-on training in Full Stack Web Development with a primary focus on React.js, Python, Django, JavaScript, HTML, CSS, and MySQL.</li>
              <li>Developed responsive and user-friendly web applications using reusable React components and modern frontend development practices.</li>
              <li>Built RESTful APIs and backend functionalities using Django.</li>
              <li>Worked with MySQL for database design, CRUD operations, and data management.</li>
              <li>Gained practical experience in debugging, Git, version control and end-to-end application development.</li>
            </ul>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.6px', marginBottom: '8px', fontWeight: 700 }}>
              Projects
            </h4>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#ffffff' }}>
                <span>News App</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>React.js, JavaScript, HTML5, CSS3, News API</span>
              </div>
              <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)' }}>
                <li>Developed a responsive news application using React.js that fetches and displays real-time news articles from a public News API.</li>
                <li>Implemented real-time news fetching, REST API integration, and category-based filtering.</li>
                <li>Engineered reusable React components with robust state management and mobile-friendly responsive UI.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#ffffff' }}>
                <span>E-Commerce Website</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>HTML5, CSS3, JavaScript</span>
              </div>
              <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)' }}>
                <li>Developed a responsive e-commerce website using HTML, CSS, and JavaScript with a clean and user-friendly interface.</li>
                <li>Implemented product search, product filtering, shopping cart functionality, DOM manipulation, and interactive event handling.</li>
                <li>Optimized performance and layout responsiveness for both desktop and mobile devices.</li>
              </ul>
            </div>
          </div>

          {/* Training */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.6px', marginBottom: '8px', fontWeight: 700 }}>
              Professional Training
            </h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#ffffff' }}>
              <span>AccioJob — MERN Stack Developer Program</span>
              <span style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>Dec 2024 – Oct 2025</span>
            </div>
            <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              <li>Built and deployed 3+ full-stack MERN applications with REST API development and JWT authentication.</li>
              <li>Worked with responsive UI, state management, backend architecture, and MongoDB Atlas.</li>
              <li>Deployed full-stack applications using Vercel and Render with optimized frontend delivery.</li>
            </ul>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.6px', marginBottom: '8px', fontWeight: 700 }}>
              Education
            </h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#ffffff' }}>
              <span>Panipat Institute of Engineering and Technology</span>
              <span style={{ color: 'var(--text-muted)' }}>2021 – 2025</span>
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Bachelor of Technology — Computer Science and Engineering</div>
            <div style={{ color: '#34d399', fontWeight: 600, marginTop: '2px' }}>CGPA: 6.5 / 10</div>
          </div>

          {/* Certifications */}
          <div>
            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.6px', marginBottom: '8px', fontWeight: 700 }}>
              Certifications & Achievements
            </h4>
            <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)' }}>
              <li><strong>AI Skills Passport</strong> — EY & Microsoft</li>
              <li><strong>Full Stack Developer Certification</strong> — DUCCAT INDIA</li>
              <li><strong>SIH Hackathon Participant</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
