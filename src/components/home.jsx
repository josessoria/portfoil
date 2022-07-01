import React from "react";
import {Link} from "react-router-dom"
import moon from "../img/moon.svg";
import { Fade } from "react-reveal";
import nave1 from "../img/astronaut.svg";
import Particle from "./particle.jsx";
import Barritascroll from "./barritascroll";
import {motion} from "framer-motion"
import "./home.scss";

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
    <motion.div className="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="ersection">
        <Particle />
        <Barritascroll />
        <div className="title">
          <h1>Jose Soria</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="imagenes">
          <img src={moon} alt="" className="object" data-value="10" />
        </div>
      </div>
      <div className="dasection" id="asd">
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

            <Link to="/" className="a">asd</Link>
          </div>
        </Fade>
      </div>

    </motion.div>
  );
}

export default Home;
