import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="about-section py-5"
      style={{ backgroundColor: '#F1F5F9' }}
    >
      <div className="container py-5">

        {/* Section Heading */}
        <div className="section-heading text-center mb-5">

          <h2
            className="fw-bold display-5"
            style={{ color: '#0B1120' }}
          >
            About Me
          </h2>

          <p style={{ color: '#0284C7' }}>
            Get to know me
          </p>

        </div>

        <div className="row align-items-center">

          {/* Who Am I Card */}
          <div className="col-lg-5 mb-4">

            <div
              className="about-card p-4 shadow-sm rounded-4 h-100"
              style={{
                backgroundColor: '#FFFFFF',
                borderLeft: '5px solid #0284C7'
              }}
            >

              <h3
                className="fw-bold mb-3"
                style={{ color: '#0284C7' }}
              >
                Who Am I?
              </h3>

              <p
                className="mb-0"
                style={{
                  color: '#475569',
                  lineHeight: '1.8'
                }}
              >
                I'm an IT undergraduate at the University of Moratuwa –
                Institute of Technology, passionate about Full Stack
                Development and UI/UX Design.
              </p>

            </div>

          </div>

          {/* Career Interests */}
          <div className="col-lg-7">

            <h3
              className="fw-bold mb-3"
              style={{ color: '#0B1120' }}
            >
              My Career Interests
            </h3>

            <p style={{ color: '#475569', lineHeight: '1.8' }}>
              I enjoy developing web applications and designing
              user-friendly interfaces. I am interested in both
              frontend and backend technologies.
            </p>

            <p style={{ color: '#475569', lineHeight: '1.8' }}>
              I continuously improve my technical knowledge through
              academic projects, practical learning and exploring
              new technologies.
            </p>

            <p style={{ color: '#475569', lineHeight: '1.8' }}>
              My goal is to gain industry experience through an
              internship and grow as a software developer.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;