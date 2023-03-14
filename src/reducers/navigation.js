import React from "react";
import { Link } from "react-router-dom";
import lemon from "../img/lemonaiderlogo.png"

function Navbar() {

    return (
      <div className="navbar">
      <div className="logo">
      <img src={lemon}  alt="Logo" className="logoImg"/>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Produkter</Link></li>
        <li><Link to="/Cart">kurv</Link></li>
      </ul>
    </div>
    );
  }

export default Navbar;