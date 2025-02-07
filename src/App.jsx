import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="bg-dark">
      <Container>
        <MyNav />

        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
