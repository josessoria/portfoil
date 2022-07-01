import React from "react";
import "./animationpage.scss";
import Home from "./home.jsx";
import Aboutme from "./aboutme"
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion"

function Animationpage() {
  const location = {useLocation};

  return (

      <Router location="location" key={location.pathname}>
        <Route  path="/" exact component={Home} />
        <Route  path="/about" exact component={Aboutme}/>
      </Router>

  );
}

export default Animationpage;
