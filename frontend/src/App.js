import React, { useState, useEffect } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import HelloWorld from './components/HelloWorld';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movies from backend
  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddMovie = async (newMovie) => {
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });

      if (!response.ok) {
        throw new Error('Failed to add movie');
      }

      const addedMovie = await response.json();
      setMovies([...movies, addedMovie]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  return (
    <div className="App">
      <HelloWorld />
      <h1>🎬 Movies Collection</h1>
      
      {error && <div className="error">{error}</div>}
      
      <AddMovie onAddMovie={handleAddMovie} />
      
      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}

export default App;
