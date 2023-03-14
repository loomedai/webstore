import React from "react";

function Navbar() {

  const logoUrl = 'https://ibb.co/h2RjJQv';

    return (
      <div className="navbar">
      <div className="logo">
      <img src="./../img/lemonaiderlogo"  alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Produkter</a></li>
        <li><a href="#">kurv</a></li>
      </ul>
    </div>
    );
  }

export default Navbar;