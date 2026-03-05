const express = require('express');
const cors = require('cors');
const moviesRouter = require('./routes/movies');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Hello World route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World from Backend!' });
});

// Movies routes
app.use('/api/movies', moviesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
