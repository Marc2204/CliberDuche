import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> 
      <section id="home"><Hero /></section>     
      <Services />
      <section id="about-us"><AboutUs /></section>
      <section id="contact"><Contact /></section>
      
      <Footer />
    </div>
  );
}

export default App;