import { Github, Linkedin, Code } from "lucide-react";
import "./Contact.css";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/MrudulaAdapala25",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrudula-adapala",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/mrudula",
    icon: Code,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/mrudula_001",
    icon: Code,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Let's Connect
        </h2>
        <div className="contact-card">
          <p className="contact-description">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <link.icon size={20} />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
