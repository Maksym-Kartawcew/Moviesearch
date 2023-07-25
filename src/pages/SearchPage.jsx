import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { toastConfig } from '../components/Loader/toastConfig';
import { useSearchParams } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import styles from './Pages.module.css';

import { fetchSearchedMovie } from 'services/api/api';
import MoviesNet from '../components/MoviesNet/MoviesNet';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query');

  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchMovie) return;

    const fetchPostsData = async () => {
      try {
        setIsLoading(true);

        const movies = await fetchSearchedMovie(searchMovie);

        setSearchMovies(movies);

        if (movies.length > 0) {
          setSearchMovies(movies);
          toast.success(
            `Your movies "${searchMovie}" were successfully fetched!`,
            toastConfig
          );
        } else {
          setSearchMovies([]);
          toast.error(`Movies not found for "${searchMovie}"`, toastConfig);
        }
      } catch (error) {
        setError(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostsData();
  }, [searchMovie]);

  const handleSumbit = event => {
    event.preventDefault();
    const searchValue = event.target.searchMovie.value.trim().toLowerCase();

    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <div>
      <div className={styles.formWrap}>
        <form className={styles.searchBox} onSubmit={handleSumbit}>
          <input
            name="searchMovie"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie.."
            required
          />
          <button type="submit" className={styles.searchBtn}>
            <span className={styles.SearchFormLabel}>Search</span>
          </button>
        </form>
      </div>

      {error !== null && (
        <p>
          Oops, some error occurred! Please, try again later. Error: {error}
        </p>
      )}
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

      {searchMovies.length > 0 && <MoviesNet dayMovies={searchMovies} />}
      {searchMovies.length === 0 && searchMovie && (
        <div className={styles.formWrap}>Ooops! No movies found!</div>
      )}
    </div>
  );
};

export default SearchPage;
