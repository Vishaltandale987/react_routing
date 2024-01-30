import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        margin: "auto",
        justifyContent: "space-evenly",
        marginTop: "2em",
      }}
    >
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Navbar;
