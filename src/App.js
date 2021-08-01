import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovieList, removeMovieFromList } from '../src/redux/actions/movieList.actions';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




let App = ({ movieList, getMovieList, removeMovieFromList }) => {
  useEffect(() => {
    getMovieList();
  }, [getMovieList])

  return (
    <Container>
      <h1>My Movie List</h1>
      <Row>
        {
          movieList && movieList.list && movieList.list.map((movie) => (
            <Col xs={12} md={6} lg={3} key={movie.imdbID}>
              <Card>  
                <Card.Img variant="top" src={movie.Poster} alt={`${movie.Title} poster`} />
                <Card.Body>
                <h3>{ movie.Title }</h3>
                <Button onClick={() => removeMovieFromList(movie)}>Remove From List </Button>
                </Card.Body>
              </Card>
            </Col>
          ))    
        }
      </Row>
    </Container>   
  );
}

const mapStateToProps = state => ({
  movieList: state.movieListReducer
});

App = connect(
  mapStateToProps,
  { getMovieList, removeMovieFromList }
)(App)


export default App;