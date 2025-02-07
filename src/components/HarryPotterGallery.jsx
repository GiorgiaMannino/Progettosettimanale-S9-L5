import { Component } from "react";

class HarryPotterGallery extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this.fetchMovies();
  }

  fetchMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=1ad1720e&s=Harry+Potter&type=movie")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <h2>Trending Now</h2>
      </div>
    );
  }
}

export default HarryPotterGallery;
