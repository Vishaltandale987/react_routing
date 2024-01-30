import React from "react";
import About from "./About";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";

function All_route() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default All_route;
