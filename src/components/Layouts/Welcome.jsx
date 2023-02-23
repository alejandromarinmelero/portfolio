import React, { useRef } from "react";

const Welcome = () => {
  const welcome = useRef();
  const welcomeContent = useRef();

  const start = () => {
    welcomeContent.current.style.marginTop = "500px";
    welcomeContent.current.style.opacity = "0";

    setTimeout(() => {
      welcome.current.style.height = "0px";
    }, 500);
  };

  return (
    <div className="welcome" ref={welcome}>
      <img src="https://img.icons8.com/ios/50/ff9f1c/ball-point-pen.png" />
      <img src="https://img.icons8.com/ios/80/ff9f1c/imac.png" />
      <img src="https://img.icons8.com/dotty/80/ff9f1c/resume.png" />
      <img src="https://img.icons8.com/external-justicon-lineal-justicon/80/ff9f1c/external-web-design-responsive-web-design-justicon-lineal-justicon-1.png" />
      <img src="https://img.icons8.com/ios-filled/50/ff9f1c/developer.png" />
      <img src="https://img.icons8.com/sf-regular-filled/48/ff9f1c/mouse-left-click.png" />
      <div className="welcome-content" ref={welcomeContent}>
        <h1>Bienvenid@</h1>
        <button className="btn" onClick={start}>
          Adelante
        </button>
      </div>
    </div>
  );
};

export default Welcome;
