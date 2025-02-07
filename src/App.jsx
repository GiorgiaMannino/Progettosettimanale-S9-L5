import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import TvShowsHeader from "./components/TvShowsHeader";
import HarryPotterGallery from "./components/HarryPotterGallery";
function App() {
  return (
    <div className="bg-dark">
      <Container>
        <MyNav />
        <TvShowsHeader />
        <HarryPotterGallery />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
