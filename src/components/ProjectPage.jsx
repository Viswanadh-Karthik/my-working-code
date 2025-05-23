import { useParams, useNavigate } from 'react-router-dom';
import '../css/ProjectPage.css';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API or data store
  const projectData = {
    1: {
      title: 'Resume Classification',
      description: 'An AI-powered resume screening system that uses natural language processing and machine learning to automatically categorize and rank resumes based on job requirements. The system helps HR professionals save time and make more objective hiring decisions.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'FastAPI', 'React'],
      githubUrl: 'https://github.com/yourusername/resume-classification',
    },
    2: {
      title: 'Book Recommendation',
      description: 'A personalized book recommendation system that uses collaborative filtering and content-based approaches to suggest books to users based on their reading history and preferences.',
      technologies: ['Python', 'Data Science', 'Recommendation Systems', 'Django', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/book-recommendation',
    },
    // Add more projects as needed
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="container">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Projects
        </button>
        
        <div className="project-content">
          <h1>{project.title}</h1>
          
          <div className="project-details">
            <div className="project-description">
              <h2>Description</h2>
              <p>{project.description}</p>
            </div>

            <div className="project-technologies">
              <h2>Technologies Used</h2>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-btn"
            >
              View Project on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 