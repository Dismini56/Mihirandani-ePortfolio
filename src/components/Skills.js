import React from 'react';
import './Skills.css';

function Skills() {

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap']
    },
    {
      title: 'Backend Development',
      skills: ['Java', 'Spring Boot', 'REST API']
    },
    {
      title: 'Database',
      skills: ['MySQL']
    },
    {
      title: 'UI/UX & Tools',
      skills: ['Figma', 'Git', 'GitHub', 'Postman']
    }
  ];

  return (
    <section id="skills" className="skills-section py-5">

      <div className="container py-5">

        <div className="section-heading text-center mb-5">
          <h2>Technical Skills</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="row">

          {skillCategories.map((category, index) => (

            <div className="col-lg-6 mb-4" key={index}>

              <div className="skill-card">

                <h4>{category.title}</h4>

                <div className="skill-list">

                  {category.skills.map((skill, skillIndex) => (

                    <span className="skill-badge" key={skillIndex}>
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;