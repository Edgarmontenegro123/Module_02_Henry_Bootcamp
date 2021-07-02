import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        {console.log(this.props.moviesFavorites)}
        <ul>
          {this.props.moviesFavorites.map((e) => <li key = {e.imdbID}>
           <Link to = {`/movie/${e.id}`}>
            {e.title}
           </Link>
           <button 
         onClick={() => this.props.removeMovieFavorite(e.id)}>Eliminar</button></li>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {moviesLoaded: state.moviesLoaded, 
          moviesFavorites: state.moviesFavorites      
    }
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList)
