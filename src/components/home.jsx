import React, { useState } from "react";
import moon from "../img/moon.svg";
import { Fade } from "react-reveal";
import nave1 from "../img/astronaut.svg";
import Particle from "./particle.jsx";
import Barritascroll from "./barritascroll";
import "./home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll(".object").forEach(function (move) {
      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 130;
      var y = (e.clientY * moving_value) / 130;
      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }

  return (
    <div className="home">
      <motion.div
        className="ersection section"
        id="home"
        initial={{ width: "200%"}}
        animate={{ width: "100%" }}
        exit={{ x: "100%", transition: { duration: 0.1 } }}>
        <Particle />
        <Barritascroll />
        <Fade bottom>
          <div className="title">
            <h1>Jose Soria</h1>
            <h2>Full Stack Developer</h2>
          </div>
        </Fade>

        <div className="imagenes">
          <img src={moon} alt="" className="object" data-value="10" />
        </div>
      </motion.div>
      <motion.div
        className="dasection section"
        id="aboutme"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <Fade left>
          <div className="imgda">
            {" "}
            <img src={nave1} alt="" className="object" data-value="-10" />
          </div>
        </Fade>
        <Fade top>
          <div className="infda">
            <h1>Aboutme</h1>
            <h3>Me encanta programar, la tecnologia y el deporte.</h3>
            <Link to="/About/" className="button">
              About
            </Link>
          </div>
        </Fade>
      </motion.div>
      <motion.div
        className="tersection section"
        id="aboutme"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <Fade rigth>
          <div className="imgda">
            {" "}
            <img src={nave1} alt="" className="object" data-value="-10" />
          </div>
        </Fade>
        <Fade top>
          <div className="infda">
            <h1>Aboutme</h1>
            <h3>Me encanta programar, la tecnologia y el deporte.</h3>
            <Link to="/About" className="button">
              About
            </Link>
          </div>
        </Fade>
      </motion.div>
    </div>
  );
}

export default Home;
