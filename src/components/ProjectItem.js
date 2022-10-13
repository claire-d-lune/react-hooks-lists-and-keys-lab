import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name)
  console.log(about);
  console.log(technologies)
  const spanList = technologies.map((tech) => {
    return <span key={tech}>{tech}</span>
  }) 
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {spanList}
      </div>
    </div>
  );
}

export default ProjectItem;
