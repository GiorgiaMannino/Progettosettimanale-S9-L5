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
    fetch("http://www.omdbapi.com/?apikey=1ad1720e&s=Harry Potter")
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
      return <div>Caricamento dei film...</div>;
    }

    if (error) {
      return <div>Errore {error}</div>;
    }

    const listMovies = [...movies];
    listMovies.splice(6);
    return (
      <Container>
        <h5 className=" text-white mt-4 mb-3">Harry Potter</h5>
        <Row className="row-cols-1 row-cols-md-3 row-cols-lg-6 g-2">
          {listMovies.map((movie) => (
            <Col key={movie.imdbID}>
              <div className="mb-5">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default HarryPotterGallery;
