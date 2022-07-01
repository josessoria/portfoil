import React, { useState } from "react";
import "./navbar.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { NavLink, BrowserRouter } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(true);
  const burguer = () => {
    setClick(!click);
  };

  return (
    <div>
      <div className={click ? "navegacionactive" : "navegacion"}>
        <div className="navegaciondentro">
          <BrowserRouter path="/">
            <NavLink to="/about" onClick={burguer}>About</NavLink>
            {/* <a href="#" onClick={burguer}>
              Works
            </a>
            <a href="#" onClick={burguer}>
              About Me
            </a>
            <a href="#" onClick={burguer}>
              Contact
            </a> */}
          </BrowserRouter>
        </div>
      </div>
      <div className="navbar">
        <h1>Jose Soria</h1>
        <div className="wrap">
          <div className="icons">
            <a href="#asd" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="asd" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
            <a href="asd" target="_blank">
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
