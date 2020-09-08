import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      console.log(request.data);
      setMovies(request.data.results);
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
