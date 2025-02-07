import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="bg-dark">
      <Container>
        <MyNav />
      </Container>
    </div>
  );
}

export default App;
