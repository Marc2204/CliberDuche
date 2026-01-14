import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs'; // You'll need to create this
import Contact from './components/Contact'; // You'll need to create this
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Home Section - This is where your Hero component should be */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Services Section - Already has id="services" */}
      <Services />
      
      {/* About Us Section */}
      <section id="about-us">
        {/* Create an AboutUs component */}
        <AboutUs />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        {/* Create a Contact component */}
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;