import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <motion.div 
          className="skill-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Languages</h3>
          <div className="skill-items">
            {profile.skills.languages.map((skill, index) => (
              <motion.span 
                key={index}
                className="skill-tag"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(100, 255, 218, 0.2)"
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.1
                  }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="skill-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Frameworks</h3>
          <div className="skill-items">
            {profile.skills.frameworks.map((skill, index) => (
              <motion.span 
                key={index}
                className="skill-tag"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(100, 255, 218, 0.2)"
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.1
                  }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="skill-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Tools</h3>
          <div className="skill-items">
            {profile.skills.tools.map((skill, index) => (
              <motion.span 
                key={index}
                className="skill-tag"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(100, 255, 218, 0.2)"
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.1
                  }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 