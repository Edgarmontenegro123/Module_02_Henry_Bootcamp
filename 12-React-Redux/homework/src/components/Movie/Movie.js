import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const { match: { params: { id }}} = this.props;
        this.props.getMovieDetail(id);
    }

    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movieDetail.Title}</h1>
                <img src = {this.props.movieDetail.Poster}/>
                <p>{this.props.movieDetail.Plot}</p>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {movieDetail: state.movieDetail     
      }
  }
  
  function mapDispatchToProps(dispatch){
    return {
      getMovieDetail: imdb => dispatch(getMovieDetail(imdb))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movie)