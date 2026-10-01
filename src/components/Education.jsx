import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  MapPin 
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section" style={{ paddingTop: '40px', paddingBottom: '70px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-badge">
            <BookOpen size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering foundation in Computer Science & Engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="education-wrap">
          <div className="glass-card education-card">
            <div className="education-icon-box">
              <GraduationCap size={28} />
            </div>

            <div className="education-details">
              <h3 className="education-degree">Bachelor of Technology</h3>
              <div className="education-branch">Computer Science and Engineering</div>
              <div className="education-institution">Panipat Institute of Engineering and Technology</div>

              <div className="education-meta">
                <div className="education-meta-item">
                  <Calendar size={15} color="var(--accent-cyan)" />
                  <span>2021 – 2025</span>
                </div>

                <div className="education-cgpa-badge">
                  <Award size={14} />
                  <span>CGPA: 6.5 / 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
