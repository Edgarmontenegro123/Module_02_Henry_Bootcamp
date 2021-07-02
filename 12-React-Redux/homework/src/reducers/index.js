const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, action){
    if(action.type === 'ADD_MOVIE_FAVORITE'){
        console.log('otro console', action.payload)
        return{
            ...state,
            moviesFavorites: [...state.moviesFavorites, action.payload]
        };
    }
    if(action.type === 'REMOVE_MOVIE_FAVORITE'){
        return{
            ...state,
            moviesFavorites: state.moviesFavorites.filter((elem) => elem.id !== action.payload)
        };
    }

    if(action.type === 'GET_MOVIES'){
        console.log('get movies', action.payload)
        return{
            ...state,
            moviesLoaded: action.payload.Search
        };
    }
   
    if(action.type === 'GET_MOVIE_DETAIL'){
        return{
            ...state,
            movieDetail: action.payload
        };
    }

    return state;
}

export default rootReducer;