// MovieCard.js
import React from 'react';


const MovieCard = ({ movie }) => {
    console.log(movie,"lalalal")
    return (
        <div className="horizontal-slider">
            {movie?.map((movie, index) => (
                <div key={index} className="movie-card">
                    <img className='image' src={movie.poster} alt={movie.title} />
                    
                </div>
            ))}
        </div>
    );
};

export default MovieCard;
