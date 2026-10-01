import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Check 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: Code2,
      skills: ['Python', 'JavaScript ES6+', 'HTML5', 'CSS3', 'SQL']
    },
    {
      category: 'Frontend',
      icon: Layout,
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design']
    },
    {
      category: 'Backend',
      icon: Server,
      skills: ['Python', 'Django', 'REST APIs']
    },
    {
      category: 'Database',
      icon: Database,
      skills: ['MySQL']
    },
    {
      category: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code']
    },
    {
      category: 'Core Computer Science',
      icon: Cpu,
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and tools utilized to build responsive, robust, and scalable full-stack applications.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="glass-card skill-category-card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="skill-cat-name">{cat.category}</h3>
                </div>

                <div className="skill-items-wrap">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-badge">
                      <span className="skill-badge-dot"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
