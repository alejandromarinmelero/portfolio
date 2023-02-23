import React, { useRef } from "react";

const About = () => {
  const skill1 = useRef();
  const skill2 = useRef();
  const skill3 = useRef();
  const skill4 = useRef();
  const skill5 = useRef();
  const skill6 = useRef();
  const skill7 = useRef();
  const skill8 = useRef();
  const skill9 = useRef();
  const skill10 = useRef();
  const skill11 = useRef();

  const showSkills = () => {
    skill1.current.style.opacity = "1";

    setTimeout(() => {
      skill2.current.style.opacity = "1";
    }, 300);

    setTimeout(() => {
      skill3.current.style.opacity = "1";
    }, 600);

    setTimeout(() => {
      skill4.current.style.opacity = "1";
    }, 900);

    setTimeout(() => {
      skill5.current.style.opacity = "1";
    }, 1200);

    setTimeout(() => {
      skill6.current.style.opacity = "1";
    }, 1500);

    setTimeout(() => {
      skill7.current.style.opacity = "1";
    }, 1800);

    setTimeout(() => {
      skill8.current.style.opacity = "1";
    }, 2100);

    setTimeout(() => {
      skill9.current.style.opacity = "1";
    }, 2400);

    setTimeout(() => {
      skill10.current.style.opacity = "1";
    }, 2700);

    setTimeout(() => {
      skill11.current.style.opacity = "1";
    }, 3000);
  };

  return (
    <div className="about" id="about">
      <div className="left-back"></div>
      <div className="about-content-sidebar">
        <div className="about-content-sidebar-text1">
          <p>
            A la par que desarrollo estos proyectos, crece el nivel de mis
            habilidades
          </p>
        </div>
      </div>
      <div className="line4">
        <div></div>
      </div>
      <button className="btn" onClick={showSkills}>
        Ver
      </button>
      <div className="skills">
        <div ref={skill1}>
          <img src="https://img.icons8.com/ios-filled/50/ff9f1c/html-5--v1.png" />
          <h5>html</h5>
        </div>
        <div ref={skill2}>
          <img src="https://img.icons8.com/wired/80/ff9f1c/css3.png" />
          <h5>css</h5>
        </div>
        <div ref={skill3}>
          <img src="https://img.icons8.com/ios-filled/50/ff9f1c/sass.png" />
          <h5>Sass</h5>
        </div>
        <div ref={skill4}>
          <img src="https://img.icons8.com/ios-filled/50/ff9f1c/javascript.png" />
          <h5>JavaScript</h5>
        </div>
        <div ref={skill5}>
          <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/80/ff9f1c/external-bootstrap-a-free-and-open-source-css-framework-logo-bold-tal-revivo.png" />
          <h5>Bootstrap</h5>
        </div>
        <div ref={skill6}>
          <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/80/ff9f1c/external-react-social-media-tanah-basah-glyph-tanah-basah.png" />
          <h5>React</h5>
        </div>
        <div ref={skill7}>
          <img src="https://img.icons8.com/ios-filled/50/ff9f1c/php-logo.png" />
          <h5>Php</h5>
        </div>
        <div ref={skill8}>
          <img src="https://img.icons8.com/ios-filled/50/ff9f1c/mysql-logo.png" />
          <h5>MySql</h5>
        </div>
        <div ref={skill9}>
          <img src="https://img.icons8.com/windows/100/ff9f1c/nodejs.png" />
          <h5>NodeJs</h5>
        </div>
        <div ref={skill10}>
          <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/ff9f1c/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" />
          <h5>MongoDB</h5>
        </div>
        <div ref={skill11}>
          <img src="https://img.icons8.com/glyph-neue/80/ff9f1c/github.png" />
          <h5>GitHub</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
