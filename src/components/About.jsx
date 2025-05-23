import { useEffect, useRef } from 'react';
import '../css/About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div ref={aboutRef} className="about-content fade-in">
          <h2>About Me</h2>
          <p>
            I am a passionate full-stack developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless
            user experiences while ensuring robust and scalable solutions.
          </p>
          <p>
            My journey in software development has equipped me with a diverse skill set,
            allowing me to tackle complex problems and deliver innovative solutions.
            I am constantly learning and adapting to new technologies to stay at the
            forefront of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 