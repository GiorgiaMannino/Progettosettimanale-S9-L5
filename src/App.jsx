import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import HarryPotterGallery from "./components/HarryPotterGallery";
import LordOfTheRings from "./components/Lord of the Rings";
import Dune from "./components/Dune";
import XMen from "./components/XMen";
import MoviesHeader from "./components/MoviesHeader";
function App() {
  return (
    <div className="bg-dark">
      <Container>
        <MyNav />
        <MoviesHeader />
        <HarryPotterGallery />
        <XMen />
        <LordOfTheRings />
        <Dune />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
