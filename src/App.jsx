import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import TvShowsHeader from "./components/TvShowsHeader";

function App() {
  return (
    <div className="bg-dark">
      <Container>
        <MyNav />
        <TvShowsHeader />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
