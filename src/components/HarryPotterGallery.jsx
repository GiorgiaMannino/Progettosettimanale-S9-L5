import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
        if (data.Response === "True") {
          this.setState({
            movies: data.Search,
            loading: false,
          });
        } else {
          this.setState({
            error: data.Error,
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
        this.setState({
          error: "Errore nel recupero dei film",
          loading: false,
        });
      });
  };

  render() {
    const { movies, loading, error } = this.state;

    if (loading) {
      return <div>Caricamento in corso...</div>;
    }

    if (error) {
      return <div>Errore: {error}</div>;
    }

    const firstSixMovies = [...movies];

    return (
      <Container>
        <Row>
          <h5 className="bg-dark text-white p-3">Trending Now</h5>
          {firstSixMovies.map((movie) => (
            <Col key={movie.imdbID}>
              <div className="mb-5">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default HarryPotterGallery;
