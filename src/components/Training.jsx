import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Server, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Database,
  Cloud 
} from 'lucide-react';

export default function Training() {
  const trainingPoints = [
    { text: 'Built and deployed 3+ full-stack MERN applications', icon: Globe },
    { text: 'REST API development & endpoint structuring', icon: Server },
    { text: 'JWT authentication & secure session handling', icon: ShieldCheck },
    { text: 'Responsive UI engineering with clean design', icon: Globe },
    { text: 'State management & component lifecycle', icon: Cpu },
    { text: 'Deployment pipelines using Vercel and Render', icon: Cloud },
    { text: 'MongoDB Atlas database configuration & schemas', icon: Database },
    { text: 'Backend architecture & error handling middleware', icon: Server },
    { text: 'Frontend optimization & asset bundle delivery', icon: Cpu },
    { text: 'Full-stack application deployment & monitoring', icon: Cloud },
  ];

  return (
    <section id="training" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Professional Growth</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Training</span>
          </h2>
          <p className="section-subtitle">
            Rigorous full-stack software development training focusing on modern development standards and deployment.
          </p>
        </div>

        {/* Training Card */}
        <div className="training-card-wrap">
          <div className="glass-card training-card">
            <div className="training-header">
              <div>
                <h3 className="training-title">MERN Stack Developer Program</h3>
                <div className="training-provider">AccioJob</div>
              </div>

              <div className="training-badge">
                <Calendar size={14} />
                <span>Dec 2024 – Oct 2025</span>
              </div>
            </div>

            <div className="training-grid">
              {trainingPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div key={idx} className="training-point">
                    <Icon size={18} />
                    <span>{point.text}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--border-light)', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Key Competencies:
              </span>
              <span className="tag tag-purple">MERN Stack</span>
              <span className="tag tag-cyan">REST APIs</span>
              <span className="tag tag-green">JWT Authentication</span>
              <span className="tag">MongoDB Atlas</span>
              <span className="tag">Vercel & Render</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
