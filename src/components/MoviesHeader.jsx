import { Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const MoviesHeader = () => {
  return (
    <section className="instruments bg-dark text-light">
      <div className="title d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center mb-3">
          <h1 className="mb-0">Movies</h1>
          <Dropdown className="ms-5">
            <Dropdown.Toggle
              variant="outline-light"
              className="dropdown-toggle rounded-0 ps-4 pe-4"
              id="dropdown-custom-components"
            >
              Generes
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Horror</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="icons">
          <i
            className="bi bi-list me-2"
            style={{
              border: "1.1px solid white",
              padding: " 0.1em 0.5em",
              cursor: "pointer",
            }}
          ></i>
          <i
            className="bi bi-grid-fill"
            style={{
              border: "1.1px solid white",
              padding: " 0.1em 0.5em",
              cursor: "pointer",
            }}
          ></i>
        </div>
      </div>
    </section>
  );
};

export default MoviesHeader;
