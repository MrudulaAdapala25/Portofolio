import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Adapala Mrudula. Built with React & CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
