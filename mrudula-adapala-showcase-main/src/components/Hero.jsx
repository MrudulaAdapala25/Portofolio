import { Mail, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div 
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content">
        <div className="hero-fade-in">
          {/* Profile Photo */}
          <div className="profile-photo-container">
            <div className="profile-photo-wrapper">
              <img 
                src={profilePhoto} 
                alt="Adapala Mrudula" 
                className="profile-photo"
              />
              <div className="profile-photo-gradient"></div>
            </div>
          </div>
          
          <h1 className="hero-title">
            Adapala Mrudula
          </h1>
          <p className="hero-subtitle">
            Front-End Developer & Computer Science Engineer
          </p>
          
          {/* Contact Info */}
          <div className="hero-contact-info">
            <a 
              href="mailto:mrudulaadapala3@gmail.com" 
              className="hero-contact-link"
            >
              <Mail size={20} />
              <span className="hero-contact-text">mrudulaadapala3@gmail.com</span>
            </a>
            <a 
              href="tel:+917396314838" 
              className="hero-contact-link"
            >
              <Phone size={20} />
              <span className="hero-contact-text">+91 7396314838</span>
            </a>
            <div className="hero-contact-item">
              <MapPin size={20} />
              <span className="hero-contact-text">Vijayawada</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="hero-cta-container">
            <a 
              href="#projects" 
              className="hero-cta-primary"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="hero-cta-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-outer">
          <div className="scroll-indicator-inner"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
