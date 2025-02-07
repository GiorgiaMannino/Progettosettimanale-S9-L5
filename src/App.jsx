/* import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import HarryPotterGallery from "./components/HarryPotterGallery";
import LordOfTheRings from "./components/Lord of the Rings";
import Dune from "./components/Dune";
import XMen from "./components/XMen";
import MoviesHeader from "./components/MoviesHeader";
import { Component } from "react";
import Loading from "./components/Loading";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }
  render() {
    const { loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="ContainerApp">
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
}

export default App; */

/* PAGINA PROFILO  */
/* import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Profile from "./components/Profile";

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="ContainerApp">
      <Container>
        <Profile />
      </Container>
    </div>
  );
};

export default App;
 */
