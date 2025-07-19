import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import './Hero.css';

const Hero = () => {
  const handleMailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${profile.social.email}`;
  };

  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-background">
        <div className="hero-gradient"></div>
        {/* Create manual animated dots instead of particles */}
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="animated-dot"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight]
            }}
            transition={{ 
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px'
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-intro"
        >
          <span>Hello, I'm</span>
        </motion.div>
        
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.name}
        </motion.h1>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-title"
        >
          {profile.title}
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hero-bio"
        >
          {profile.bio}
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#projects" className="primary-btn">View My Work</a>
          <a 
            href={`mailto:${profile.social.email}`} 
            className="primary-btn"
            onClick={handleMailClick}
          >
            Contact Me
          </a>
        </motion.div>
        
        <motion.div 
          className="social-links"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <a href="#about">
          <i className="fas fa-chevron-down"></i>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 