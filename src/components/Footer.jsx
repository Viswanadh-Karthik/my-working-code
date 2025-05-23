import '../css/Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'X',
      url: 'https://twitter.com/yourusername',
      icon: '𝕏',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'in',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/yourusername',
      icon: 'f',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: '📸',
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 