import React from 'react'
import MovieCard from './MovieCard'

const MovieList =  ({movie = [], onAddMovie = () => {}}) => (
     <div className="movie-list">
        {
            movie.map(el => <MovieCard key={el.id} movie={el} />)
        }
        <div className="new-movie-card"
        
        onClick={() => {
                
          onAddMovie({
              id: Math.random(),
              title: prompt('movie title: '),
              rating: Number(prompt('movie rating: ')),
              year: Number(prompt('movie year: '))
          })
      }} 
        
        
        
        
        
        >+</div>
      </div>
)

export default MovieList