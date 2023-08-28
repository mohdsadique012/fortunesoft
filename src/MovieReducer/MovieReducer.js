const MovieReducer= (state, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return {
                ...state,
                is_loading: true
            };

        case "API_ERROR":
            return {
                ...state,
                is_loading: false,
                is_error: true
            };
            case "SET_API_DATA":
                const moviesByGenre={};
                action.payload.movies.forEach(movie => {
                    movie.genres.forEach(genre => {
                        if (!moviesByGenre[genre]) {
                            moviesByGenre[genre] = [];
                        }
                        moviesByGenre[genre].push(movie);
                    });
                });
                return {
                    ...state,
                    is_loading: false,
                    is_error: false,
                    movies: action.payload.movies, 
                    genre:moviesByGenre
                    
                };   
              
     

      

        default:
            return state;
    }
}

export default MovieReducer;