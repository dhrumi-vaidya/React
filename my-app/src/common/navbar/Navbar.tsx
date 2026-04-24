import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <div className="navbar__logo">
          ⚡ MyBrand
        </div>

        {/* Desktop Menu */}
        <nav className="navbar__menu">
             <Link to="/">Home</Link>
          <Link to="/about">About</Link>
       
        </nav>

        {/* Desktop Buttons */}
        <div className="navbar__actions">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar__mobile-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>

          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      )}
    </header>
  );
}

export default Navbar;