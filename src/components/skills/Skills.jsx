import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import './Skills.css';

const SkillBar = ({ skill, delay }) => (
  <motion.div 
    className="skill-bar-container"
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: "100%", opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="skill-info">
      <span>{skill.name}</span>
      <span>{skill.proficiency}%</span>
    </div>
    <div className="skill-bar">
      <motion.div 
        className="skill-progress"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.proficiency}%` }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

const DevOpsCloud = ({ title, items }) => (
  <motion.div 
    className="devops-cloud"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h4>{title}</h4>
    <div className="cloud-services">
      {items.map((item, index) => (
        <motion.span 
          key={index}
          className="cloud-tag"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      
      <div className="skills-grid">
        <motion.div className="skills-column">
          <h3>Programming Languages</h3>
          {profile.skills.languages.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
          ))}
        </motion.div>

        <motion.div className="skills-column">
          <h3>Frontend Development</h3>
          {profile.skills.frontend.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
          ))}
        </motion.div>

        <motion.div className="skills-column">
          <h3>Backend Development</h3>
          {profile.skills.backend.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
          ))}
        </motion.div>

        <motion.div className="skills-column">
          <h3>Databases</h3>
          {profile.skills.databases.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>

      <div className="cloud-ai-section">
        <div className="devops-section">
          <h3>DevOps & Cloud</h3>
          <div className="cloud-providers">
            <DevOpsCloud title="Azure Services" items={profile.skills.devops.azure} />
            <DevOpsCloud title="DevOps Tools" items={profile.skills.devops.tools} />
          </div>
        </div>

        <div className="ai-section">
          <h3>AI & Machine Learning</h3>
          <div className="ai-categories">
            <DevOpsCloud title="AI Frameworks" items={profile.skills.ai.frameworks} />
            <DevOpsCloud title="AI Services" items={profile.skills.ai.nlp} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 