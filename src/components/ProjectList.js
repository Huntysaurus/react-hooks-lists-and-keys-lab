import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projectObj= projects.map(project => (
   <ProjectItem 
    key={project.id}
    name={project.name}
    about={project.about} 
    technologies={project.technologies}
    />
  ))

   
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectObj}
      </div>
    </div>
  );
}

export default ProjectList;
