import React from "react";
import "./Services.css";

const Services = () => {
  const services1 = [
    { title: "Backfill Sourcing / Land Sourcing" },
    { title: "Land Development" },
    { title: "Site Management" },
    { title: "Equipment Leasing" },
  ];

  const services2 = [
    { title: "Land Development" },
    { title: "Project Management Consultation" },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">OUR SERVICES</h2>
        <p className="section-subtitle">
          Cliberduche Corporation offers a comprehensive range of services
        </p>

        {/* Primary Function */}
        <h3 className="function-title">Primary Function</h3>
        <div className="services-grid">
          {services1.map((service, index) => (
            <div key={index} className="service-card"> 
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Secondary Function */}
        <h3 className="function-title">Secondary Function</h3>
        <div className="services-grid">
          {services2.map((service, index) => (
            <div key={index} className="service-card">
             
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;