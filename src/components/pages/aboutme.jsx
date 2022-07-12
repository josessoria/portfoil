import React from "react";
import Particle from "../configs/particle.jsx";
import "./aboutme.scss";
import { motion } from "framer-motion";
import Flecha from "../minicomponets/flecha";
import Fade from "react-reveal/Fade";


import {

  FaConnectdevelop,
  FaReact,
  FaSass,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import { SiAltiumdesigner, SiRedux, SiPostgresql } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";

function Aboutme() {
  return (
    <motion.div
      className=""
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "-100%", transition: { duration: 0.1 } }}
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
              <h1>Jose Soria Vera Del Barco</h1>
              <span>
                Born in Tucumán, Argentina, in 2004, the year the robotic
                vehicle "Opportunity" landed on the surface of Mars. From a very
                young age I was interested in technology and innovation, I was
                always very sociable and practiced team sports, I started in the
                world of development and programming as a hobby.
              </span>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="timeline2">
          <div className="numerador">
            <span className="barr">--------</span>
            <h3 className="numbarr">02</h3>
          </div>
          <div className="infor">
            <span className="titleinfo">HOBBIES</span>

            <div className="info" id="aboutfrom">
              <div className="prueba">
                {" "}
                <SiAltiumdesigner />
                <h1>Design</h1>
                <span>
                  More than 2 years in design and creation of web pages, 100%
                  original and responsive designs, I started in the front end
                  world as a hobby and as a freelance, until I decided to
                  continue studying and become fullstack to be able to enter the
                  world of work.
                </span>
              </div>

              <div className="prueba">
                {" "}
                <FaConnectdevelop />
                <h1>Develop</h1>
                <span>
                  In my free time I take the opportunity to learn new
                  technologies and investigate the innovations of the world, I
                  like to apply what I have learned (or try hahaha), some of my
                  interests are: Ethical Hacking, BlockChain, Machine Learning.
                </span>
              </div>

              <div className="prueba">
                {" "}
                <CgGym />
                <h1>Gymrat</h1>
                <span>
                  It may seem funny or strange in a developer, but my biggest
                  hobby is going to the gym, I like to see my progress and see
                  how far I can go.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="timeline3">
          <div className="numerador">
            <span className="barr">--------</span>
            <h3 className="numbarr">03</h3>
          </div>
          <div className="infor">
            <div className="span">
              <span className="titleinfo">SKILLS</span>
            </div>

            <div className="info" id="aboutfrom">

              <div className="icon">
                {" "}
                <FaReact />
                <span>React</span>
              </div>
              <div className="icon">
                {" "}
                <FaSass />
                <span>Sass</span>
              </div>
              <div className="icon">
                {" "}
                <FaCss3 />
                <span>CSS3</span>
              </div>
              <div className="icon">
                {" "}
                <SiRedux />
                <span>Redux</span>
              </div>
              <div className="icon">
                {" "}
                <FaBootstrap />
                <span>Bootstrap</span>
              </div>
              <div className="icon">
                {" "}
                <FaNodeJs />
                <span>NodeJs</span>
              </div>
              <div className="icon">
                {" "}
                <SiPostgresql />
                <span>Postgresql</span>
              </div>
              <div className="icon">
                {" "}
                <FaNpm />
                <span>Npm</span>
              </div>
              <div className="icon">
                {" "}
                <IoLogoJavascript />
                <span>Javascript</span>
              </div>
              <div className="icon">
                {" "}
                <IoLogoHtml5 />
                <span>Html5</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>

    </motion.div>
  );
}

export default Aboutme;
