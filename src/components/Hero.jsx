import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Copy, 
  Check, 
  FileCode, 
  Database, 
  Server, 
  Globe 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    react: {
      filename: 'App.jsx',
      icon: Globe,
      lang: 'React.js',
      code: `// React.js Component - Interactive Dashboard
import React, { useState, useEffect } from 'react';

export function DevPortfolio({ developer }) {
  const [skills, setSkills] = useState([]);
  const [status, setStatus] = useState('Ready for Impact');

  useEffect(() => {
    // REST API Integration
    fetch('/api/v1/developer/skills/')
      .then(res => res.json())
      .then(data => setSkills(data.frontend_stack));
  }, []);

  return (
    <div className="developer-profile">
      <h2>{developer.name}</h2>
      <p className="role">Full Stack Developer</p>
      <div className="stack-badges">
        {skills.map(skill => (
          <span key={skill} className="badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}`
    },
    django: {
      filename: 'views.py',
      icon: Server,
      lang: 'Python / Django',
      code: `# Django REST Framework - API View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Project
from .serializers import ProjectSerializer

class ProjectListAPIView(APIView):
    """
    List all developer projects with clean REST endpoints.
    """
    def get(self, request, format=None):
        projects = Project.objects.filter(is_featured=True)
        serializer = ProjectSerializer(projects, many=True)
        return Response({
            "status": "success",
            "developer": "Harsh Kumar",
            "data": serializer.data
        }, status=status.HTTP_200_OK)`
    },
    mysql: {
      filename: 'schema.sql',
      icon: Database,
      lang: 'MySQL',
      code: `-- MySQL Relational Database Schema
CREATE TABLE developers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100) DEFAULT 'Full Stack Developer',
    location VARCHAR(120) DEFAULT 'Noida, UP, India',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE developer_skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    developer_id INT,
    skill_category VARCHAR(50),
    skill_name VARCHAR(80),
    FOREIGN KEY (developer_id) REFERENCES developers(id)
);

-- Query: Retrieve verified core stack
SELECT skill_category, skill_name 
FROM developer_skills 
WHERE developer_id = 1;`
    },
    api: {
      filename: 'api-response.json',
      icon: Terminal,
      lang: 'REST API',
      code: `{
  "status": 200,
  "message": "Developer Profile Loaded",
  "candidate": {
    "name": "Harsh Kumar",
    "role": "Full Stack Developer",
    "specialization": [
      "React.js",
      "Python",
      "Django",
      "REST APIs",
      "MySQL"
    ],
    "experience": "DUCCAT INDIA Intern",
    "availability": "Immediate",
    "location": "Noida, Uttar Pradesh, India"
  }
}`
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introductions & CTAs */}
          <div className="hero-content">
            <div className="hero-greeting">
              <span className="hero-greeting-pulse"></span>
              <span>Available for Full Stack Opportunities</span>
            </div>

            <div>
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Harsh Kumar</span>
              </h1>
              <span className="hero-role">Full Stack Developer</span>
            </div>

            <div className="hero-tech-stack-pill">
              <span>React.js</span>
              <span>•</span>
              <span>Python</span>
              <span>•</span>
              <span>Django</span>
              <span>•</span>
              <span>REST APIs</span>
              <span>•</span>
              <span>MySQL</span>
            </div>

            <p className="hero-intro">
              Full Stack Developer with hands-on experience building responsive web applications, 
              RESTful APIs, and modern user interfaces through academic projects, internships, 
              and professional training.
            </p>

            <div className="hero-ctas">
              <a href="#projects" onClick={scrollToProjects} className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary">
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="hero-socials">
              <span className="hero-socials-label">Connect:</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="GitHub Profile (Editable placeholder)"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={19} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="LinkedIn Profile (Editable placeholder)"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={19} />
              </a>
              <a 
                href="mailto:harshsingh7543810314@gmail.com" 
                className="social-icon-btn" 
                title="Email Harsh Kumar"
                aria-label="Email Harsh Kumar"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer Visualizer IDE */}
          <div className="hero-visual">
            <div className="hero-ide-window">
              {/* Window Bar */}
              <div className="hero-ide-header">
                <div className="ide-window-controls">
                  <span className="control-dot red"></span>
                  <span className="control-dot yellow"></span>
                  <span className="control-dot green"></span>
                </div>
                <div className="ide-title">harsh-kumar-workspace — vsc</div>
                <button 
                  onClick={copyCode} 
                  className="btn btn-sm btn-secondary" 
                  style={{ padding: '4px 8px', fontSize: '12px' }}
                  title="Copy snippet"
                >
                  {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Tabs */}
              <div className="hero-ide-tabs">
                {Object.entries(codeSnippets).map(([key, data]) => {
                  const Icon = data.icon;
                  return (
                    <div
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`ide-tab ${activeTab === key ? 'active' : ''}`}
                    >
                      <Icon size={14} />
                      <span>{data.filename}</span>
                    </div>
                  );
                })}
              </div>

              {/* Code Display */}
              <pre className="hero-ide-body">
                <code>{codeSnippets[activeTab].code}</code>
              </pre>

              {/* IDE Footer */}
              <div className="hero-ide-footer">
                <div className="ide-status-badge">
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', display: 'inline-block' }}></span>
                  <span>Stack: {codeSnippets[activeTab].lang}</span>
                </div>
                <div>UTF-8 • Spaces: 2 • Line: 24, Col: 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
