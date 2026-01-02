import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./hooks/Pages/Navbar";
import Home from "./hooks/Pages/Home";
import About from "./hooks/Pages/About";
import Contact from "./hooks/Pages/Contact";
import Services from "./hooks/Pages/Services";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
