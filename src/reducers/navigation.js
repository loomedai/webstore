function Navbar() {

    return (
      <div className="navbar">
      <div className="logo">
        <img src="{logo}" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Produkter</a></li>
        <li><a href="#">kurv</a></li>
      </ul>
    </div>
    );
  }

export default Navbar;