import React from "react";
import Home from "./home";
import Aboutme from "./aboutme";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Animatedroutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Aboutme />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Animatedroutes;
