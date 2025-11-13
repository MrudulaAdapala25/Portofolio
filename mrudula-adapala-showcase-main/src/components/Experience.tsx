import { Briefcase } from "lucide-react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">
          Work Experience
        </h2>
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-icon-wrapper">
              <Briefcase className="experience-icon" size={28} />
            </div>
            <div className="experience-content">
              <div className="experience-title-row">
                <h3 className="experience-position">
                  Front-End Developer
                </h3>
                <span className="experience-period">Present</span>
              </div>
              <p className="experience-company">Med-Copilot</p>
              <ul className="experience-list">
                <li className="experience-item">
                  <span className="experience-bullet">•</span>
                  <span>
                    Worked on designing and developing interactive, responsive UIs using React.js, 
                    HTML, CSS, and Bootstrap.
                  </span>
                </li>
                <li className="experience-item">
                  <span className="experience-bullet">•</span>
                  <span>
                    Collaborated with cross-functional teams to improve performance and scalability.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
