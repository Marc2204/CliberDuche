import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import BackfillImg from "../assets/backfilling.png";
import LandDevImg from "../assets/landDev.png";
import SiteMgmtImg from "../assets/Site.png";
import EquipLeaseImg from "../assets/Leasing.png";
import ProjectImg from "../assets/Project.png";

const Services = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const serviceRefs = useRef([]);

  const primaryServiceImages = [
    {
      id: 1,
      imageUrl: BackfillImg,
      title: "Backfill Sourcing / Land Sourcing",
      description: "Backfill sourcing / Land Sourcing is the process of identifying and obtaining suitable soil, sand, gravel, or other fill materials needed to refill excavated areas, support foundations, or level ground during construction projects, while land sourcing is the process of identifying, evaluating, and acquiring land for development, investment, or construction purposes."
    },
    {
      id: 2,
      imageUrl: LandDevImg,
      title: "Land Development",
      description: "Land development is the process of preparing raw land so it can be used for building homes, businesses, roads, or other facilities. It includes clearing the land, leveling the ground, and installing basic services like water, electricity, and drainage."
    },
    {
      id: 3,
      imageUrl: SiteMgmtImg,
      title: "Site Management",
      description: "Service management is the process of planning, delivering, and improving services to ensure they meet customer needs efficiently and effectively, while managing resources, maintaining quality standards, and continuously enhancing performance to achieve customer satisfaction and business goals."
    },
    {
      id: 4,
      imageUrl: EquipLeaseImg,
      title: "Equipment Leasing",
      description: "Equipment leasing is when a person or business pays to use equipment for a certain time instead of buying it. They make regular payments during the lease. At the end, they can return the equipment, buy it for a smaller price, or extend the lease. Leasing is helpful because it saves money upfront, lets you use newer equipment, and can improve cash flow."
    }
  ];

  const secondaryServiceImages = [
    {
      id: 1,
      imageUrl: LandDevImg,
      title: "Land Development",
      description: "Land development is the process of preparing raw land so it can be used for building homes, businesses, roads, or other facilities. It includes clearing the land, leveling the ground, and installing basic services like water, electricity, and drainage."
    },
    {
      id: 2,
      imageUrl: ProjectImg,
      title: "Proejct Management Consultation",
      description: "Project management consultation is when experts help plan, organize, and manage a project to make sure it finishes on time, within budget, and meets its goals. They give advice on how to handle risks, communicate with the team, and solve problems that come up during the project."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Trigger when 30% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const itemId = entry.target.dataset.id;
        
        setVisibleItems(prev => ({
          ...prev,
          [itemId]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each service item
    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup
    return () => {
      serviceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="service-container">
        <h2 className="section-title">OUR SERVICES</h2>
        <p className="section-subtitle">
          Cliberduche Corporation offers a comprehensive range of services
        </p>
        
        {/* Primary Services */}
        <div className="primary-services">
          <h2 className="function-title">Primary Function</h2>
          
          <div className="services-container">
            {primaryServiceImages.map((service, index) => (
              <div 
                key={service.id}
                ref={el => serviceRefs.current[index] = el}
                data-id={service.id}
                className={`service-item ${index % 2 === 0 ? 'image-left' : 'image-right'} 
                  ${visibleItems[service.id] ? 'visible' : 'hidden'}`}
              >
                <div className="service-image">
                  <img src={service.imageUrl} alt={service.title} />
                </div>
                <div className="service-text">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Secondary Services */}
        <div className="secondary-services">
          <h2 className="function-title">Secondary Function</h2>
          <div className="services-container">
            {secondaryServiceImages.map((service, index) => (
              <div 
                key={service.id}
                ref={el => serviceRefs.current[index + primaryServiceImages.length] = el}
                data-id={service.id}
                className={`service-item ${index % 2 === 0 ? 'image-left' : 'image-right'} 
                  ${visibleItems[service.id] ? 'visible' : 'hidden'}`}
              >
                <div className="service-image">
                  <img src={service.imageUrl} alt={service.title} />
                </div>
                <div className="service-text">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;