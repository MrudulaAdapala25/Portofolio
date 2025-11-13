import { GraduationCap } from "lucide-react";
import "./Education.css";

const educationData = [
  {
    year: "Jan 2026 (Expected)",
    degree: "B.Tech – Computer Science and Engineering",
    score: "CGPA: 8.44",
    institution: "Prasad V.Potluri Siddhartha Institute of Technology, Vijayawada",
  },
  {
    year: "Jan 2023",
    degree: "Diploma in Computer Science",
    score: "Percentage: 94.4%",
    institution: "Krishnaveni Polytechnic College, Vijayawada",
  },
  {
    year: "Jan 2020",
    degree: "SSC",
    score: "CGPA: 10.0",
    institution: "St. Anne's High School, Vijayawada",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">
          Education
        </h2>
        <div className="education-list">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="education-item"
            >
              <div className="education-content">
                <div className="education-year-wrapper">
                  <GraduationCap className="education-icon" size={24} />
                  <span className="education-year">{edu.year}</span>
                </div>
                <div className="education-details">
                  <h3 className="education-degree">
                    {edu.degree}
                  </h3>
                  <p className="education-score">{edu.score}</p>
                  <p className="education-institution">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
