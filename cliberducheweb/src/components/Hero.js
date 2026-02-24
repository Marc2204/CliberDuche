import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef(null);
  
  const fullText = "The Company was established in 2018, CLIBERDUCHE CORPORATION was born out of the dream of a person to provide the best for his family without leaving the country anymore. This person found this opportunity in the wide field of the construction business. Immediately, he invited his friends to join him and officially registered CLIBERDUCHE CORPORATION was registered with the Securities and Exchange Commission on as November 28, 2018.";
  
  // Reset animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset the typing animation
            setDisplayText('');
            setIsTyping(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 15);
      
      return () => clearInterval(typingInterval);
    }
  }, [isTyping, fullText]);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-content">
        <h1 className="typing-animation">THE COMPANY</h1>
        <h2 className="typing-animation typing-delay-1">CLIBERDUCHE CORPORATION</h2>
        <p className="typing-paragraph">
          {displayText}
          {showCursor && <span className="typing-cursor">|</span>}
        </p>
      </div>
    </section>
  );
};

export default Hero;