import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Sparkles, 
  BadgeCheck, 
  Trophy 
} from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AI Skills Passport',
      issuer: 'EY & Microsoft',
      icon: Sparkles,
      type: 'Industry Certification',
      accentColor: '#38bdf8'
    },
    {
      title: 'Full Stack Developer Certification',
      issuer: 'DUCCAT INDIA',
      icon: Award,
      type: 'Professional Credential',
      accentColor: '#a855f7'
    },
    {
      title: 'SIH Hackathon Participant',
      issuer: 'Smart India Hackathon',
      icon: Trophy,
      type: 'National Hackathon',
      accentColor: '#34d399'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Accredited recognitions and competitive technical participation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div key={idx} className="glass-card cert-card">
                <div>
                  <div className="cert-top">
                    <div className="cert-icon" style={{ borderColor: `${cert.accentColor}44`, color: cert.accentColor }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="cert-title">{cert.title}</h3>
                      <div className="cert-issuer">{cert.issuer}</div>
                    </div>
                  </div>
                </div>

                <div className="cert-footer">
                  <span>{cert.type}</span>
                  <div className="cert-verified">
                    <BadgeCheck size={16} />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
