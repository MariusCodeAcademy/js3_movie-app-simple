import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import MovieRow from './movieRow';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
class MovieTable extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    testArr: [
      { id: 1, title: 'blue' },
      { id: 2, title: 'red' },
      { id: 3, title: 'green' },
    ],
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movieId) => {
    console.log('You are trying to delete, WHy ?', movieId);
    const moviesWithoutTheOneWeDeleted = this.state.movies.filter((m) => m._id !== movieId);
    this.setState({ movies: moviesWithoutTheOneWeDeleted });
  };

  handlePageChange = (pageNum) => {
    // console.log(pageNum);
    this.setState({ currentPage: pageNum });
  };

  handleGenreChange = (genre) => {
    // console.log('handleChange', genre);
    this.setState({ currentGenre: genre });
  };

  render() {
    const { movies: mv, currentPage, pageSize, genres, currentGenre } = this.state;
    if (mv.length === 0)
      return <div className="alert alert-warning">There are no movies at the moment</div>;

    // paduoti tik tiek movies kiek reikia pagal pagination
    const moviesPaginated = paginate(mv, currentPage, pageSize);

    return (
      <div className="movie">
        <h3 className="my-4">Please see out movies</h3>
        <div className="row">
          <div className="col-3">
            <ListGroup
              selectedItem={currentGenre}
              onItemSelect={this.handleGenreChange}
              items={genres}
            />
          </div>
          <div className="col">
            <p>Showing {mv.length} movies in out store</p>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {moviesPaginated.map((movie) => (
                  <MovieRow onDelete={this.handleDelete} movie={movie} key={movie._id} />
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              itemCount={mv.length}
              pageSize={pageSize}
            />
          </div>
        </div>
        {/* <ListGroup
          items={this.state.testArr}
          textProperty="title"
          valueProperty="id"
          onItemSelect={this.handleGenreChange}
        /> */}
      </div>
    );
  }
}

export default MovieTable;
