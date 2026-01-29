import React, { useState } from 'react';
import './AboutUs.css';
import OrgChartImage from '../assets/OrgChart.png'; // Imported here

const AboutUs = () => {
  
  const [showOrgChart, setShowOrgChart] = useState(false);

 
  const handleOpen = () => {
    setShowOrgChart(true);
   
    console.log("Opening organizational chart...");
   
  };

  const handleClose = () => {
    setShowOrgChart(false);
  };

  return (
    <section className="about-section" id="about-us">
      <div className="container">
        <h2 className="section-title">ABOUT US</h2>
        <div className="about-content">
          <div className="about-text">
            <p>CLIBERDUCHE CORPORATION provides the best quality backfill materials
            as specified by clients like, sub-base, aggregates and boulders to
            interested customers in CALABARZON area and beyond.</p>

            <p>Our land development sites which we own are located in the heart of
            Laguna and Cavite Provinces, Philippines, with over 14 Million Cubic Meter
            of Landfill / Backfilling Materials on both sites to meet the growing needs
            of the industry. We're proud of our growing roster of satisfied clients and
            look forward to servicing more.</p>

            <p>Our company is equally keen to pursue potential business relationships
            and long-term arrangements that mutually benefit both parties. We also
            believe in a sustainable and eco-friendly business venture, thus we
            follow strict protocol and guidelines of concerned Government
            institutions like the Department of Environment and Natural Resources
            (DENR).</p>
            
            <p>The company grew and from thereon, covering services like General
            Engineering and Civil works as the clients are clamoring if we can also
            provide other needs such as Construction and Development for both
            horizontal and vertical, with the same situation and to satisfy client's
            needs, we endeavored and worked hard to achieve the status of a One
            Stop Shop Company.</p>
          </div>

          <button className="org-chart-button" onClick={handleOpen}>
            Organizational Chart
          </button>

          {showOrgChart && (
            <div className="org-chart-modal">
              <div className="org-chart-content">

                <h3>Organizational Chart</h3>

                <img
                  src={OrgChartImage} 
                  alt="Organizational Chart"
                  className="org-chart-image"
                />
                
                <button onClick={handleClose}>Close</button>
              
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;