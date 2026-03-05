import React, { useState, useEffect } from 'react';
import './HelloWorld.css';

function HelloWorld() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching hello world:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="hello-world">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>✨ {message} ✨</p>
      )}
    </div>
  );
}

export default HelloWorld;
