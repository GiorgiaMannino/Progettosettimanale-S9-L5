import { Component } from "react";

class HarryPotterGallery extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
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
