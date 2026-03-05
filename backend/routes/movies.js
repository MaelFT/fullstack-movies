const express = require('express');
const router = express.Router();

// In-memory movies database
let movies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Science-Fiction', rating: 8.8 },
  { id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0 },
  { id: 3, title: 'Interstellar', year: 2014, genre: 'Science-Fiction', rating: 8.6 },
  { id: 4, title: 'Pulp Fiction', year: 1994, genre: 'Crime', rating: 8.9 },
  { id: 5, title: 'The Matrix', year: 1999, genre: 'Science-Fiction', rating: 8.7 }
];

// GET all movies
router.get('/', (req, res) => {
  res.json(movies);
});

// GET movie by id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(m => m.id === id);
  
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }
  
  res.json(movie);
});

// POST new movie (Bonus)
router.post('/', (req, res) => {
  const { title, year, genre, rating } = req.body;
  
  // Validation: accepter rating = 0 pour l'easter egg Ynov 😏
  if (!title || !year || !genre || rating === undefined || rating === null) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const newMovie = {
    id: movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1,
    title,
    year: parseInt(year),
    genre,
    rating: parseFloat(rating)
  };
  
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

module.exports = router;
