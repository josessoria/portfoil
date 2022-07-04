import React from "react";
import "./aboutme.scss";
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <motion.div
      className="bodyy"
      initial={{scaleY: 0}}
      animate={{scaleY:1}}
      exit={{scaleY:0}}
      transition={{duration:0.5}}
      // initial={{width: 0}}
      // animate={{width:"100%"}}
      // exit={{x: window.innerWidth, transition:{duration:0.1}}}
    >
      <div className="cuadrado">
        <h1>ESTOY EN EL ABOUT PUTO</h1>
      </div>
    </motion.div>
  );
}

export default Aboutme;
