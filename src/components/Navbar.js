import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: '#0B1120' }}>

      <div className="container">

        {/* Portfolio Name */}
        <Link className="navbar-brand fw-bold" to="/">
          Mihirandani.
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="portfolioNavbar">

          <div className="navbar-nav ms-auto">

            <Link className="nav-link" to="/">Home</Link>

            <Link className="nav-link" to="/about">About</Link>

            <Link className="nav-link" to="/skills">Skills</Link>

            <Link className="nav-link" to="/projects">Projects</Link>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;