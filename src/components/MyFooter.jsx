import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="footer text-white bg-dark py-4">
      <Container>
        <div className="iconsSocial text-secondary fs-4 mb-3 text-center text-md-start">
          <i className="bi bi-facebook me-3"></i>
          <i className="bi bi-instagram me-3"></i>
          <i className="bi bi-twitter me-3"></i>
          <i className="bi bi-youtube me-3"></i>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
