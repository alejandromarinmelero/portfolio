import React from "react";

const Projects = () => {
  const deploy = () => {
    alert("despliegue en desarrollo");
  };
  return (
    <div className="projects" id="projects">
      <img
        className="projects-back"
        src="/assets/gifs/programer.gif"
        alt="programer"
      />
      <div className="projects-content">
        <div className="card" onClick={deploy}>
          <img src="/assets/images/project-1.png" alt="" />
          <h3>E-commerce</h3>
          <p>MERN Stack</p>
        </div>
        <div className="card" onClick={deploy}>
          <img src="/assets/images/project-2.png" alt="" />
          <h3>CRUD con autenticación</h3>
          <p>MERN Stack</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
