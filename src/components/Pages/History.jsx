import React from "react";

const History = () => {
  return (
    <div className="history" id="history">
      <div className="history-content">
        <img className="down" src="/assets/gifs/down2.gif" alt="down" />

        <img
          className="system"
          src="/assets/images/system2.webp"
          alt="system"
        />
        <img className="dev" src="/assets/images/devops.webp" alt="system" />
        <img
          className="passion"
          src="/assets/images/passion.webp"
          alt="passion"
        />
        <img className="bike" src="/assets/gifs/bike.gif" alt="bike" />

        <p className="text1">
          Mi historia comienza como técnico de sistemas, administrando
          servidores, redes, Bases de datos, haciendo soporte a usuarios, etc...
        </p>
        <p className="text2">
          En mis estudios aprendí desarrollo web, por lo que durante mi
          experiencia como técnico tambien desempeño labores de diseño y
          desarrollo... Lo que empieza a apasionarme cada vez más etc...
        </p>
        <p className="text3">
          Con el tiempo empiezo a poner en la balanza el estar en mi zona de
          confort o hacer lo que me apasiona verdaderamente. Así abandono mi
          puesto de técnico para empezar de nuevo como desarrollador web!!
        </p>
        <p className="text4">
          Con mucha motivación, estudio y una fuerte experiencia autodidacta,
          empiezo a desarrollar diferentes proyectos.{" "}
          <span>Continua haciendo scroll para ver algunos!</span>
        </p>

        <div className="line1">
          <div></div>
        </div>
        <div className="line2">
          <div></div>
        </div>
        <div className="line3">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default History;
