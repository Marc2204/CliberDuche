import React, { useEffect, useRef, useState } from 'react';
import './MissionVision.css';

const MissionVision = () => {
  const [scrollState, setScrollState] = useState('none'); // 'none', 'mission', 'vision', 'past'
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !missionRef.current || !visionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const missionRect = missionRef.current.getBoundingClientRect();
      const visionRect = visionRef.current.getBoundingClientRect();
      
      const windowHeight = window.innerHeight;

      // Check if mission is in view (centered)
      if (missionRect.top < windowHeight * 0.6 && missionRect.bottom > windowHeight * 0.4) {
        setScrollState('mission');
      }
      // Check if vision is in view (centered)
      else if (visionRect.top < windowHeight * 0.6 && visionRect.bottom > windowHeight * 0.4) {
        setScrollState('vision');
      }
      // Check if scrolled past the section
      else if (sectionRect.top < -sectionRect.height * 0.5) {
        setScrollState('past');
      }
      // Not in view yet
      else {
        setScrollState('none');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="mission-vision-section" id="mission-vision" ref={sectionRef}>
      <div className="mission-vision-container">
        <h2 className="section-title">MISSION & VISION</h2>
        <p className="section-subtitle">Our commitment to excellence and sustainability</p>

        <div className="mission-content" ref={missionRef}>   
          <div className={`mission-text ${scrollState === 'mission' ? 'visible' : ''} ${scrollState === 'vision' ? 'sliding-out' : ''}`}>
            <h2>Mission</h2>
            <p>We are a responsible land development company that provides high-quality backfill materials for land development projects and other infrastructures, including but not limited to sub-base materials like aggregates, mixed soil, and boulders. We support sustainable land development by adhering to the existing environmental regulations of the Philippines. We provide jobs for fellow Filipinos, which significantly contributes to boosting our country's economy. We are also keen to deliver excellent value to our partner communities, investors, employees, and other stakeholders.</p>
          </div>    
        </div>

        <div className="vision-content" ref={visionRef}>
          <div className={`vision-text ${scrollState === 'vision' ? 'visible' : ''} ${scrollState === 'past' ? 'sliding-out' : ''}`}>
            <h2>Vision</h2>
            <p>Our vision is to be a highly respected, world-class natural resource land development company committed to adhering to international standards in land development operations and environmental conservation, sustainable projects that cover converting land development sites into other useful and economic projects in the future, thus converting land development projects to future commercial and housing projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;