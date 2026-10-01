import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Check, 
  ShoppingCart, 
  Newspaper, 
  Eye, 
  Sparkles,
  Smartphone,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'ecommerce',
      name: 'E-Commerce Website',
      category: 'Frontend Web Application',
      icon: ShoppingCart,
      accentColor: '#38bdf8',
      description: 'Developed a responsive e-commerce website using HTML, CSS, and JavaScript with a clean and user-friendly interface. Fully optimized for seamless browsing on desktop and mobile devices.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM API', 'Event Handling'],
      features: [
        'Product Search with real-time filtering',
        'Category-based dynamic product filtering',
        'Interactive Shopping Cart with quantity controls',
        'Responsive layout for desktop & mobile devices',
        'Interactive UI with dynamic JavaScript DOM manipulation',
        'Structured event handling & performance optimization'
      ],
      githubUrl: 'https://github.com/placeholder/ecommerce-website', // Editable placeholder link
      liveUrl: 'https://placeholder.com/ecommerce-live', // Editable placeholder link
    },
    {
      id: 'newsapp',
      name: 'News App',
      category: 'React & REST API Application',
      icon: Newspaper,
      accentColor: '#a855f7',
      description: 'Developed a responsive news application using React.js that fetches and displays real-time news articles from a public News API with robust state management and component reusability.',
      technologies: ['React.js', 'JavaScript ES6+', 'News API', 'REST API', 'HTML5', 'CSS3'],
      features: [
        'Real-time news fetching from public News API endpoints',
        'REST API integration with asynchronous error handling',
        'Category-based filtering (Tech, Business, Science, Sports)',
        'Modular & reusable React functional components',
        'Clean React state management (useState, useEffect)',
        'Mobile-friendly responsive UI & card architecture'
      ],
      githubUrl: 'https://github.com/placeholder/react-news-app', // Editable placeholder link
      liveUrl: 'https://placeholder.com/news-app-live', // Editable placeholder link
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Key applications demonstrating full-stack engineering, clean UI design, and RESTful API integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="glass-card project-card">
                {/* Visual Header / Banner */}
                <div className="project-banner">
                  <div className="project-banner-pattern"></div>
                  <div className="project-banner-icon" style={{ borderColor: `${project.accentColor}55` }}>
                    <Icon size={32} style={{ color: project.accentColor }} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="project-body">
                  <div className="project-header-top">
                    <span className="project-category-tag" style={{ color: project.accentColor }}>
                      {project.category}
                    </span>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="tag tag-cyan"
                      style={{ cursor: 'pointer' }}
                      title="Launch interactive demo in modal"
                    >
                      <Sparkles size={12} />
                      <span>Live Preview</span>
                    </button>
                  </div>

                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-features-list">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="project-feature-item">
                        <Check size={16} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1 }}
                    >
                      <Eye size={15} />
                      <span>Interactive Demo</span>
                    </button>

                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary btn-sm"
                      title="View GitHub Repository (Editable placeholder)"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
