import React, { useState } from 'react';
import './AddMovie.css';

function AddMovie({ onAddMovie }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    genre: '',
    rating: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const success = await onAddMovie(formData);
    
    if (success) {
      setFormData({ title: '', year: '', genre: '', rating: '' });
      setIsOpen(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-movie-container">
      <button 
        className="toggle-form-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖ Cancel' : '➕ Add New Movie'}
      </button>

      {isOpen && (
        <form className="add-movie-form" onSubmit={handleSubmit}>
          <h2>Add New Movie</h2>
          
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter movie title"
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              min="1900"
              max="2100"
              placeholder="e.g., 2024"
            />
          </div>

          <div className="form-group">
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              placeholder="e.g., Action, Drama"
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              min="0"
              max="10"
              step="0.1"
              placeholder="e.g., 8.5"
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Movie
          </button>
        </form>
      )}
    </div>
  );
}

export default AddMovie;
