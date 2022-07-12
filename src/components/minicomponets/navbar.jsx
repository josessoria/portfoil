import React, { useState } from "react";
import "./navbar.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import {Link} from "react-router-dom"
import cv from "../../img/cv.pdf"

function Navbar() {
  const [click, setClick] = useState(true);
  const burguer = () => {
    setClick(!click);
  };

  return (
    <div>
      <div className={click ? "navegacionactive" : "navegacion"}>
        <div className="navegaciondentro">
          <Link to="/" onClick={burguer}>Home</Link>
          <Link to="/About" onClick={burguer}>About Me</Link>
          <Link to="/projects" onClick={burguer}>Projects</Link>
        </div>
      </div>
      <div className="navbar">
        <Link to="/" className="Link"><h1>Jose Soria</h1></Link>
        <div className="wrap">
          <div className="icons">
            <a href="https://github.com/josessoria" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/josessoria/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
            <a href={cv} target="_blank" rel="noreferrer">
              Curriculum
            </a>
          </div>
          <div className="burguer" onClick={burguer}>
            {click ? (
              <FaHamburger className="close" />
            ) : (
              <AiFillCloseCircle className="close" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
