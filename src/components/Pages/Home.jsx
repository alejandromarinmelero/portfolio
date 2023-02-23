import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("cargado");
  }, []);

  return (
    <div className="home" id="home">
      <img className="hello" src="/assets/images/hello.jpg" alt="hello" />
      <p>
        Soy Alex, desarrollador web. <br /> Haz scroll para conocer mi historia!
      </p>
      <img src="/assets/gifs/scroll-down-gif.gif" alt="scroll-gif" />
    </div>
  );
};

export default Home;
