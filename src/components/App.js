import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';
import AddMovie from './AddMovie';
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      movies: initialMovies
    };
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
    this.addMovieToGallery = this.addMovieToGallery.bind( this );
  }
  addMovieToGallery( movie ) {
  var ts = Date.now();
  var newMovie = {};
  newMovie[ 'movie' + ts ] = movie;
  var currentMovies = { ...this.state.movies };
  var newMovies = Object.assign( currentMovies, newMovie );
  this.setState({ movies: newMovies });
}
  loadAdditionalMovies(){
    var currentMovies = {...this.state.movies};
    var newMovies = Object.assign(currentMovies, additionalMovies);
    this.setState({movies: newMovies}); 
  }
  render() {
    return (
      <div className="App">
          <Header text="Discover Your Movies" />
         <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
         {
          Object.keys(this.state.movies).map(key => 
          <Movie key = {key} meta = {this.state.movies[key]} />)
         }
         <div className="add-movies">
         <button onClick={this.loadAdditionalMovies}> Load More... </button>
         </div>
        </div>
      <AddMovie addMovie={this.addMovieToGallery} />
      </div>
    );
  }
}
 
export default App;
