import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class LordOfTheRings extends Component {
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
    fetch("http://www.omdbapi.com/?apikey=1ad1720e&s=Lord Of The Rings")
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
        <h5 className=" text-white  mb-3">Lord of the Rings</h5>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-2">
          {listMovies.map((movie) => (
            <Col key={movie.imdbID}>
              <div>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid mb-5"
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
export default LordOfTheRings;
