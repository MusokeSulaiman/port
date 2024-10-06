import React from "react";
import "./Project.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>A brief description of the project.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>A brief description of the project.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects;
