import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNav = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark mb-3" expand="lg">
      <Navbar.Brand href="#">
        <img height="40" src="./src/assets/netflix_logo.png" alt="Netflix Logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#" className="active">
            Movies
          </Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>

        <Nav className="ms-auto align-items-center">
          <Nav.Link href="#" className="me-3">
            <i className="bi bi-search"></i>
          </Nav.Link>
          <Nav.Link href="#" className="me-3">
            KIDS
          </Nav.Link>
          <Nav.Link href="#" className="me-3">
            <i className="bi bi-bell-fill"></i>
          </Nav.Link>

          <NavDropdown
            title={
              <img
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
                alt="User"
                className="rounded"
                width="30"
                height="30"
              />
            }
            id="navbarDropdown"
            align="end"
          >
            <NavDropdown.Item href="./profile.html">Profile</NavDropdown.Item>
            <NavDropdown.Item href="./settings.html">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Sign out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
