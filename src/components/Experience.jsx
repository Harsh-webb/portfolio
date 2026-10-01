import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  Layers 
} from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'DUCCAT INDIA',
      location: 'Noida, India',
      period: 'Sep 2025 – Apr 2026',
      responsibilities: [
        'Completed hands-on training in Full Stack Web Development with a primary focus on React.js, Python, Django, JavaScript, HTML, CSS, and MySQL.',
        'Developed responsive and user-friendly web applications using reusable React components and modern frontend development practices.',
        'Built RESTful APIs and backend functionalities using Django.',
        'Worked with MySQL for database design, CRUD operations, and data management.',
        'Gained practical experience in debugging, Git, version control and end-to-end application development.'
      ],
      technologies: ['React.js', 'Python', 'Django', 'REST APIs', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Git']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Career History</span>
          </div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on professional experience building real-world applications and RESTful architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-marker-inner"></div>
              </div>

              <div className="glass-card experience-card">
                <div className="exp-card-header">
                  <div>
                    <h3 className="exp-role-title">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-location">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="exp-period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="exp-responsibilities">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="exp-resp-item">
                      <span className="exp-resp-bullet">▹</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Applied Technologies:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tag tag-cyan">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
