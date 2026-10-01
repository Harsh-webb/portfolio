import React from 'react';
import { 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  FolderGit2, 
  Terminal, 
  Code 
} from 'lucide-react';

export default function About() {
  const focusAreas = [
    'Responsive web applications',
    'User-friendly interfaces',
    'RESTful APIs',
    'Full-stack applications',
    'Clean and maintainable code',
  ];

  const highlights = [
    {
      icon: GraduationCap,
      color: 'blue',
      title: 'B.Tech CSE',
      period: '2021 – 2025',
      desc: 'Panipat Institute of Engineering and Technology'
    },
    {
      icon: Briefcase,
      color: 'cyan',
      title: 'Full Stack Developer Intern',
      period: 'Sep 2025 – Apr 2026',
      desc: 'DUCCAT INDIA — Noida, India'
    },
    {
      icon: Layers,
      color: 'purple',
      title: '3+ MERN Applications',
      period: 'Professional Training',
      desc: 'AccioJob MERN Stack Program'
    },
    {
      icon: FolderGit2,
      color: 'emerald',
      title: '2 Featured Projects',
      period: 'E-commerce + News App',
      desc: 'Frontend & API Integration showcase'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A developer dedicated to engineering reliable, scalable, and responsive web solutions.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="glass-card about-card">
            <p className="about-text">
              I am a dedicated <strong>Full Stack Developer</strong> based in Noida, Uttar Pradesh, 
              with practical hands-on experience across the entire web development lifecycle. 
              My technical foundation spans <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>, 
              <strong>Python</strong>, <strong>Django</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, 
              <strong>MySQL</strong>, and building robust <strong>REST APIs</strong>.
            </p>

            <p className="about-text">
              Through my academic background in Computer Science & Engineering, comprehensive professional 
              training, and internship at DUCCAT INDIA, I have honed the discipline needed to build well-architected 
              applications from database design to intuitive frontend interfaces.
            </p>

            <div className="about-focus-title">Core Development Focus</div>
            <div className="about-focus-list">
              {focusAreas.map((item, idx) => (
                <div key={idx} className="about-focus-item">
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Statistics / Highlights */}
          <div className="about-stats-grid">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-card stat-card">
                  <div className={`stat-icon ${item.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="stat-title">{item.title}</h3>
                    <div style={{ color: 'var(--accent-cyan)', fontSize: '13px', fontWeight: 600, marginBottom: '2px', fontFamily: 'var(--font-mono)' }}>
                      {item.period}
                    </div>
                    <p className="stat-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
