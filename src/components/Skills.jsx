import { useState } from 'react';
import '../css/Skills.css';

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);

  const skillsData = [
    {
      id: 1,
      title: 'Data Science',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'Data Analysis'],
    },
    {
      id: 2,
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'Node.js', 'SQL'],
    },
    {
      id: 3,
      title: 'Frontend',
      skills: ['React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 4,
      title: 'UI/UX',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className={`skill-card ${activeCard === skill.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(skill.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3>{skill.title}</h3>
              <div className="skills-list">
                {skill.skills.map((item, index) => (
                  <span key={index} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 