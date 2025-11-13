import { Code2, ExternalLink } from "lucide-react";
import "./Projects.css";

const projectsData = [
  {
    title: "Liver Function Analysis",
    description:
      "Built a predictive model to detect liver failure using ML algorithms.",
    tags: ["Machine Learning", "Python", "Data Analysis"],
  },
  {
    title: "Online Fraud Detection",
    description:
      "Designed a real-time system to identify fraudulent transactions based on user behavior.",
    tags: ["Machine Learning", "Real-time Processing", "Python"],
  },
  {
    title: "Job Portal",
    description:
      "Developed a React.js web app connecting recruiters and job seekers with efficient filtering and responsive UI.",
    tags: ["React.js", "Full Stack", "Responsive Design"],
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a modern, responsive portfolio website using React.js, Tailwind CSS, and TypeScript to showcase projects and skills.",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Projects
        </h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card"
            >
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <Code2 className="project-icon" size={24} />
                </div>
                <ExternalLink className="project-external-icon" size={20} />
              </div>
              <h3 className="project-title">
                {project.title}
              </h3>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="project-tag"
                  >
                    {tag}
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

export default Projects;
