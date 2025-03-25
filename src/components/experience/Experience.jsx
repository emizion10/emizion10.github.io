import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {profile.experience.map((exp, index) => (
          <motion.div 
            key={index}
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="experience-period">{exp.period}</div>
            <div className="experience-content">
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 