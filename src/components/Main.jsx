import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Layouts/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import History from "./Pages/History";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

const Main = () => {
  const scrollBox = useRef();

  // Escuchar la rueda del mouse para cambar el scroll hacia la derecha

  useEffect(() => {
    const listenScroll = (e) => {
      scrollBox.current.scrollBy({
        left: e.deltaY < 0 ? -1 : 1,
      });
      setScroll(e.deltaY);
    };

    scrollBox.current.addEventListener("wheel", listenScroll);

    return () => {
      scrollBox.current.removeEventListener("wheel", listenScroll);
    };
  }, []);

  return (
    <div className="main" ref={scrollBox}>
      <Navbar />
      <Home />
      <History />
      <Projects />
      <About />
      <Contact />
      <div className="scroll-info">
        <img src="https://img.icons8.com/ios-glyphs/30/001d3d/info-popup.png" />
        <p>Haz scroll hacia abajo para avanzar o hacia arriba para volver</p>
      </div>
      <p className="credits">
        © 2023. All Rights Reserved. Alejandro Marín Melero
      </p>
      <div className="links">
        <a href="https://github.com/alejandromarinmelero" target="_blank">
          <img src="https://img.icons8.com/glyph-neue/64/001d3d/github.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-mar%C3%ADn-melero-163899182/"
          target="_blank"
        >
          <img src="https://img.icons8.com/ios-filled/50/001d3d/linkedin.png" />
        </a>
        <a
          target="_blank"
          href="/assets/documents/Alejandro marín melero CV final.pdf"
        >
          CV
        </a>
      </div>

      <div className="responsive-alert">
        <h1>
          Responsive app en desarrollo <br />
          Disculpa las molestias :/
        </h1>
      </div>
    </div>
  );
};

export default Main;
