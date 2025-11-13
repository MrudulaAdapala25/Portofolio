import "./Skills.css";

const skillsData = {
  Languages: ["C", "C++", "Python", "JavaScript"],
  Frontend: ["HTML", "CSS", "Bootstrap", "React.js"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          Skills
        </h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="skill-category-card"
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-items">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-item"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
