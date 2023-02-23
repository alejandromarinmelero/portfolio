import React, { useState } from "react";

const Navbar = ({ scroll }) => {
  const [openNav, setOpenNav] = useState(false);

  const onDev = () => {
    scroll = 100;
    alert("Barra de navegacion en desarrollo");
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div
          className={
            openNav ? "navbar-toggle navbar-toggle-open" : "navbar-toggle"
          }
          onClick={() => {
            !openNav ? setOpenNav(true) : setOpenNav(false);
          }}
        >
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={openNav ? "navbar-nav navbar-nav-open" : "navbar-nav"}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#history">Historia</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
