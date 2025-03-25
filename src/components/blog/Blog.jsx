import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { blogs } from '../../data/blogs';
import './Blog.css';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blog" className="blog">
      <h2>Blog Posts</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedBlog(blog)}
          >
            <h3>{blog.title}</h3>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-summary">{blog.summary}</p>
            <div className="blog-tags">
              {blog.tags.map((tag, i) => (
                <span key={i} className="blog-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedBlog && (
        <motion.div 
          className="blog-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="blog-modal-content">
            <button className="close-button" onClick={() => setSelectedBlog(null)}>×</button>
            <h2>{selectedBlog.title}</h2>
            <p className="blog-date">{selectedBlog.date}</p>
            <div className="blog-content">{selectedBlog.content}</div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Blog; 