import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{ backgroundColor: '#0B1120' }}
    >
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Left Side - Introduction */}
          <div className="col-lg-7">

            <p className="text-info fw-semibold">
              HELLO, I'M
            </p>

            <h1
              className="display-3 fw-bold"
              style={{ color: '#38BDF8' }}
            >
              M.D. Mihirandani
            </h1>

            <h2 className="text-white mb-4">
              Full Stack Developer & UI/UX Designer
            </h2>

            <p
              className="mb-4"
              style={{
                color: '#CBD5E1',
                fontSize: '17px',
                lineHeight: '1.8'
              }}
            >
              I'm an IT undergraduate at the University of Moratuwa –
              Institute of Technology, interested in developing modern
              web applications and creating user-friendly digital experiences.
            </p>

            {/* Navigation Buttons */}
            <div className="home-buttons">

              {/* Download CV Button */}
 <a
  href="/cv/Mihirandani_ CV.pdf"
  download="Mihirandani_ CV.pdf"
  className="home-btn"
>
  Download My CV
</a>

              {/* Contact Button */}
              <Link to="/contact" className="home-btn">
                Contact Me
              </Link>

            </div>

          </div>

          {/* Right Side - Profile Photo */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">

            <div className="profile-placeholder">
              Your Photo
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;