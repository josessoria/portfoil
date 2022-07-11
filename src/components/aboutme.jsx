import React from "react";
import Particle from "./particle.jsx";
import "./aboutme.scss";
import { motion } from "framer-motion";
import Flecha from "./flecha";
import { Fade } from "react-reveal";

function Aboutme() {
  return (
    <motion.div
      className=""
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.1 } }}
      exit={{ width: 0, transition: { duration: 0.1 } }}
      // initial={{width: 0}}
      // animate={{width:"100%"}}
      // exit={{x: window.innerWidth, transition:{duration:0.1}}}
    >
      <Flecha />
      <Particle />
      <div className="aboutme" id="a">
        <div className="cuadrado">
          <h1>About Me</h1>
        </div>
        <div className="cuadrado">
          <h2>I love programming, technology and sports</h2>
        </div>
      </div>
      <Fade left>
      <div className="timeline">
        <div className="numerador">
          <span className="barr">--------</span>
          <h3 className="numbarr">01</h3>
        </div>
        <div className="infor">
          <span className="titleinfo">WHO I AM</span>
          <div className="info" id="aboutfrom">
            <h1>Jose Soria</h1>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              deserunt quam autem asperiores laboriosam alias voluptas,
              perspiciatis aliquam est? Doloribus tempora similique beatae. Odit
              hic, modi cumque illo reprehenderit tempore!
            </span>
          </div>
        </div>
      </div>
      </Fade>
      <Fade left>
      <div className="timeline2">
        <div className="numerador">
          <span className="barr">--------</span>
          <h3 className="numbarr">02</h3>
        </div>
        <div className="infor">
          <span className="titleinfo">PASSION</span>
          <div className="info" id="aboutfrom">
            <div className="pruebas">
              {" "}
              <h1>Jose Soria</h1>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti deserunt quam autem asperiores laboriosam alias
                voluptas, perspiciatis aliquam est? Doloribus tempora similique
                beatae. Odit hic, modi cumque illo reprehenderit tempore!
              </span>
            </div>
            <div className="prueba">
              {" "}
              <h1>Jose Soria</h1>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti deserunt quam autem asperiores laboriosam alias
                voluptas, perspiciatis aliquam est? Doloribus tempora similique
                beatae. Odit hic, modi cumque illo reprehenderit tempore!
              </span>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </motion.div>
  );
}

export default Aboutme;
