import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Resume Classification',
      description: 'AI-powered resume screening system using NLP and machine learning.',
      technologies: ['Python', 'NLP', 'Machine Learning'],
    },
    {
      id: 2,
      title: 'Book Recommendation',
      description: 'Personalized book recommendation system using collaborative filtering.',
      technologies: ['Python', 'Data Science', 'Recommendation Systems'],
    },
    {
      id: 3,
      title: 'Oil Price Prediction',
      description: 'Time series analysis and prediction of oil prices using ML models.',
      technologies: ['Python', 'Time Series', 'Deep Learning'],
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative task management platform with real-time updates.',
      technologies: ['React', 'Firebase', 'Material-UI'],
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking and forecasting application.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
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

export default Projects; 