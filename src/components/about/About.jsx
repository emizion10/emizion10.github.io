import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import './About.css';

const About = () => {
  return (
    <motion.section 
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>{profile.aboutMe}</p>
          <p>
            I'm particularly interested in:
          </p>
          <ul>
            {profile.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          className="about-image"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img 
            src="/images/profile.jpeg" 
            alt={profile.name} 
            className="profile-image"
          />
          <div className="image-overlay"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 