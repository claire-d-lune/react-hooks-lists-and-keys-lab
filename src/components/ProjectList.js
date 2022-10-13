import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  let itemList = projects.map((project) => {
    return <ProjectItem key={project.id} technologies={project.technologies} name={project.name} about={project.about} />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {itemList}
      </div>
    </div>
  );
}

export default ProjectList;
