import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './pages/Contact';



function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#0B1120' }}>

        <div className="container">

          <Link className="navbar-brand fw-bold" to="/">
            M.D. Mihirandani
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="portfolioNavbar">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>

             

            </ul>

          </div>
        </div>
      </nav>

      {/* Page Navigation */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </>
  );
}

export default App;