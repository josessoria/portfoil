import React from "react";
import Home from "../pages/home";
import Aboutme from "../pages/aboutme";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Slide from "../pages/projects"



function Animatedroutes() {
  const location = useLocation();

  
  return (
    <AnimatePresence exitBeforeEnter>

      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Aboutme />} />
        <Route exact path="/projects" element={<Slide />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Animatedroutes;
