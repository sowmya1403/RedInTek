import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </Router>
  );
};

export default App;
