import React, { useEffect, useRef, useState } from 'react';
import './MissionVision.css';

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // When element leaves viewport
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="mission-vision-section" id="mission-vision" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">MISSION & VISION</h2>
        <p className="section-subtitle">Our commitment to excellence and sustainability</p>

        <div className="mission-vision-content">
          <div className={`mission-text ${isVisible ? 'visible' : ''}`}>
            <h2>Mission</h2>
            <p>We are a responsible land development company that provides high-quality backfill materials for land development projects and other infrastructures, including but not limited to sub-base materials like aggregates, mixed soil, and boulders. We support sustainable land development by adhering to the existing environmental regulations of the Philippines. We provide jobs for fellow Filipinos, which significantly contributes to boosting our country's economy. We are also keen to deliver excellent value to our partner communities, investors, employees, and other stakeholders.</p>
          </div>    
            
          <div className={`vision-text ${isVisible ? 'visible' : ''}`}>
            <h2>Vision</h2>
            <p>Our vision is to be a highly respected, world-class natural resource land development company committed to adhering to international standards in land development operations and environmental conservation, sustainable projects that cover converting land development sites into other useful and economic projects in the future, thus converting land development projects to future commercial and housing projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;