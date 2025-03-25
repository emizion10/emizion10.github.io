import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Blog />
        <Footer />
      </div>
    </Router>
  );
}

export default App; 