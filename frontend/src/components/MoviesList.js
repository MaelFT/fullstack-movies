import React, { useState } from 'react';
import './MoviesList.css';

function MoviesList({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [minRating, setMinRating] = useState(0);

  // Get unique genres
  const genres = ['All', ...new Set(movies.map(movie => movie.genre))];

  // Filter movies based on search term, genre, and rating
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;
    const matchesRating = movie.rating >= minRating;
    
    return matchesSearch && matchesGenre && matchesRating;
  });

  return (
    <div className="movies-container">
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="genre-select"
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        
        <div className="rating-filter">
          <label>Min Rating: {minRating.toFixed(1)}</label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
          />
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.length === 0 ? (
          <div className="no-movies">No movies found matching your criteria</div>
        ) : (
          filteredMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <div className="movie-header">
                <h3>{movie.title}</h3>
                <span className="rating">⭐ {movie.rating}</span>
              </div>
              <div className="movie-details">
                <p><strong>Year:</strong> {movie.year}</p>
                <p><strong>Genre:</strong> <span className="genre-badge">{movie.genre}</span></p>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="movies-count">
        Showing {filteredMovies.length} of {movies.length} movies
      </div>
    </div>
  );
}

export default MoviesList;
