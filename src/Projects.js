import React from "react";

function Projects() {
  const projectLinks = [];

  return (
    <section id="projects" className="full-screen">
      <h2>My Projects</h2>
      <p>will be updated soon</p>
      <ul>
        {projectLinks.map((project) => (
          <li key={project.name}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
