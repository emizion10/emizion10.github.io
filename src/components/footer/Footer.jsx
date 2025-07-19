import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </motion.div>
        <motion.p 
          className="footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 