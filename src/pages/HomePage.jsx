import React, { useState, useEffect } from 'react';
import { Dna } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { fetchMoviesNet } from '../services/api/api';
import { toastConfig } from '../components/Loader/toastConfig';

import MoviesNet from '../components/MoviesNet/MoviesNet';

const HomePage = () => {
  const [dayMovies, setDayMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const movies = await fetchMoviesNet();

        setDayMovies(movies);
      } catch (error) {
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <div>
      {isLoading && (
        <Dna
          visible={true}
          height={80}
          width={80}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClassName="dna-wrapper"
        />
      )}

      <MoviesNet dayMovies={dayMovies} />
    </div>
  );
};

export default HomePage;
