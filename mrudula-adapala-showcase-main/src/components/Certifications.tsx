import { Award } from "lucide-react";
import "./Certifications.css";

const certificationsData = [
  "Full Stack Web Development",
  "Machine Learning (Infosys Springboard)",
  "Programming in Java (NPTEL)",
  "C & C++ (Spoken Tutorial)",
  "MySQL (Spoken Tutorial)",
];

const extracurricularData = [
  "Participated in Coding Quiz – SITAR 2K24",
  "24-hour Blockchain Hackathon – MIC College",
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2 className="certifications-title">
          Certifications & Activities
        </h2>
        
        <div className="certifications-grid">
          {/* Certifications */}
          <div className="certifications-card">
            <h3 className="certifications-card-title">
              <Award className="certification-icon" size={28} />
              Certifications
            </h3>
            <ul className="certifications-list">
              {certificationsData.map((cert, index) => (
                <li
                  key={index}
                  className="certification-item"
                >
                  <span className="certification-checkmark">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra-Curricular */}
          <div className="certifications-card">
            <h3 className="certifications-card-title">
              <Award className="activity-icon" size={28} />
              Extra-Curricular Activities
            </h3>
            <ul className="certifications-list">
              {extracurricularData.map((activity, index) => (
                <li
                  key={index}
                  className="certification-item"
                >
                  <span className="certification-star">★</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
