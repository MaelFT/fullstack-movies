# Fullstack Movies App 🎬

A fullstack application with Node.js/Express backend and React frontend for managing a movie collection.

## Features

- ✨ Hello World on both backend and frontend
- 📋 List all movies
- 🔍 Search and filter movies (by title, genre, and rating)
- ➕ Add new movies (POST endpoint)
- 🎨 Beautiful gradient UI with glassmorphism effects

## Tech Stack

**Backend:**
- Node.js
- Express
- CORS

**Frontend:**
- React
- CSS3 with modern effects

## Project Structure

```
fullstack-movies/
├── backend/
│   ├── routes/
│   │   └── movies.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── HelloWorld.js
│   │   │   ├── MoviesList.js
│   │   │   └── AddMovie.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Installation

### Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on: `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

## API Endpoints

### GET /api/movies
Returns all movies

### GET /api/movies/:id
Returns a specific movie by ID

### POST /api/movies
Add a new movie

**Request Body:**
```json
{
  "title": "Movie Title",
  "year": 2024,
  "genre": "Action",
  "rating": 8.5
}
```

## Features

- **Hello World**: Displays a hello world message from the backend
- **Movies List**: Shows all movies in a beautiful card grid
- **Search Filter**: Search movies by title
- **Genre Filter**: Filter movies by genre
- **Rating Filter**: Filter movies by minimum rating (slider)
- **Add Movie**: Form to add new movies to the collection

## Default Movies

The app comes with 5 pre-loaded movies:
1. Inception (2010) - Science-Fiction - 8.8
2. The Dark Knight (2008) - Action - 9.0
3. Interstellar (2014) - Science-Fiction - 8.6
4. Pulp Fiction (1994) - Crime - 8.9
5. The Matrix (1999) - Science-Fiction - 8.7

## Bonus Features ✅

- ✅ POST endpoint for adding movies
- ✅ Frontend filters (search, genre, rating) - no API calls needed
- ✅ Beautiful modern UI with glassmorphism effects
- ✅ Responsive design

## Author

Created for Ynov Web Fullstack course
