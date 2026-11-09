import React from 'react';

function Projects() {

  const projects = [
    {
      title: 'NorthSea Factory Digital Control System',
      category: 'Final Year Group Project',
      description:
        'A web-based system developed to improve stock and sales management at North Sea Limited. My main contribution focused on authentication, role-based access control, user management and database backups.',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Flask'],
    },

    {
      title: 'Chat Application',
      category: 'Personal Project- In Progress',
      description:
        'Developing a mobile chat application using Flutter and Firebase.Exploring user authentication and real-time communication features.Gaining practical experience in mobile application development.',
      technologies: ['Flutter', 'Firebase', 'Dart', 'REST APIs'],
    },

    {
      title: 'Personal Portfolio Website',
      category: 'Personal Project',
      description:
        'A responsive personal portfolio website designed to showcase my technical skills, academic projects and professional interests.',
      technologies: ['React.js', 'Bootstrap', 'CSS3', 'HTML5', 'JavaScript']
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#F1F5F9', minHeight: '90vh' }}>

      <div className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold" style={{ color: '#0B1120', fontSize: '38px' }}>
            My Projects
          </h2>

          <p style={{ color: '#0284C7' }}>
            Some of the projects I have worked on
          </p>

        </div>

        <div className="row">

          {projects.map((project, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: '15px' }}
              >

                <div className="card-body p-4">

                  <span
                    className="badge mb-3"
                    style={{
                      backgroundColor: '#E0F2FE',
                      color: '#075985'
                    }}
                  >
                    {project.category}
                  </span>

                  <h4 className="fw-bold mb-3" style={{ color: '#0B1120' }}>
                    {project.title}
                  </h4>

                  <p style={{ color: '#475569', lineHeight: '1.7' }}>
                    {project.description}
                  </p>

                  <h6 className="fw-bold mt-4 mb-3">
                    Technologies Used
                  </h6>

                  <div className="d-flex flex-wrap gap-2">

                    {project.technologies.map((technology, techIndex) => (

                      <span
                        key={techIndex}
                        className="badge"
                        style={{
                          backgroundColor: '#E0F2FE',
                          color: '#075985',
                          padding: '8px 12px'
                        }}
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;