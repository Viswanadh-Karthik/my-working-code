import { useEffect, useState } from 'react';
import '../css/Loading.css';

const Loading = ({ onLoadingComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Wait for fade-out animation to complete
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-container ${isFading ? 'fade-out' : ''}`}>
      <div className="loading-spinner"></div>
      <div className="loading-text">Loading Portfolio...</div>
    </div>
  );
};

export default Loading; 