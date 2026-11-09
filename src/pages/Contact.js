import React, { useState } from 'react';
import './Contact.css';
function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const yourEmail = 'YOUR_EMAIL@example.com';

    const subject = encodeURIComponent('Portfolio Contact Message');

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:${yourEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#F1F5F9',
        minHeight: '90vh'
      }}
    >

      <div className="container py-5">

        {/* Page Heading */}

        <div className="text-center mb-5">

          <h2
            className="fw-bold"
            style={{ color: '#0B1120', fontSize: '38px' }}
          >
            Get In Touch
          </h2>

          <p style={{ color: '#0284C7' }}>
            Feel free to contact me for opportunities and collaborations.
          </p>

        </div>

        <div className="row g-4">

          {/* Contact Information */}

          <div className="col-lg-5">

            <div
              className="p-4 h-100 bg-white shadow-sm"
              style={{ borderRadius: '15px' }}
            >

              <h4 className="fw-bold mb-4" style={{ color: '#0B1120' }}>
                Contact Information
              </h4>

              <div className="mb-4">

                <h6 className="fw-bold" style={{ color: '#0284C7' }}>
                  Email
                </h6>

                <a href="mailto:mihirandanimahalekam@gmail.com"
   className="text-decoration-none text-secondary">
  mihirandanimahalekam@gmail.com
</a>

              </div>

              <div className="mb-4">

                <h6 className="fw-bold" style={{ color: '#0284C7' }}>
                  University
                </h6>

                <p className="text-secondary">
                  University of Moratuwa – Institute of Technology
                </p>

              </div>

              <div className="mb-4">

                <h6 className="fw-bold" style={{ color: '#0284C7' }}>
                  GitHub
                </h6>

                <a
                  href="https://github.com/Dismini56"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  View My GitHub Profile
                </a>

              </div>

              <div>

                <h6 className="fw-bold" style={{ color: '#0284C7' }}>
                  Career Interest
                </h6>

                <p className="text-secondary">
                  Full Stack Development | UI/UX Design
                </p>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="col-lg-7">

            <div
              className="p-4 bg-white shadow-sm"
              style={{ borderRadius: '15px' }}
            >

              <h4 className="fw-bold mb-4" style={{ color: '#0B1120' }}>
                Send Me a Message
              </h4>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Message
                  </label>

                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                </div>

                <button
    type="submit"
    className="contact-btn"
>
    Send Message
</button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;