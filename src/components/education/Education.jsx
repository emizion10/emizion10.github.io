import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        {profile.education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="education-period">{edu.period}</div>
            <div className="education-content">
              <h3>{edu.institution}</h3>
              <h4>{edu.degree}</h4>
              <p>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education; 