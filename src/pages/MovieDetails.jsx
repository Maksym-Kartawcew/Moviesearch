import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';
import { toastConfig } from '../components/Loader/toastConfig';
import { toast } from 'react-toastify';
import { Dna } from 'react-loader-spinner';

import { fetchMovieDetails } from '../services/api/api';
import placeholder from '../images/cinema.png';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Pages.module.css';

const MovieReviews = lazy(() => import('../pages/MovieReviews'));
const MovieCast = lazy(() => import('../pages/MovieCast'));

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetailsData = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);

        setMovieDetails(movieData);
      } catch (error) {
        setError(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  return (
    <div>
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

      <div>
        <Link to={backLinkHref.current} className={styles.formWrap}>
          {' '}
          &#8592; Back to movies
        </Link>
        {movieDetails !== null && (
          <div>
            <div className={styles.MovieDetailsBox}>
              <div className={styles.MovieDetailsImg}>
                <img
                  src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}` : placeholder}
                  alt={movieDetails.title}
                  width="400"
                />
              </div>

              <div>
                <h2>
                  Title: {movieDetails.title} (
                  {movieDetails.first_air_date
                    ? movieDetails.first_air_date
                    : movieDetails.release_date}
                  )
                </h2>
                <p>User score: {movieDetails.vote_average} </p>
                <h3>Overview: {movieDetails.overview} </h3>
                <p></p>
                <h3>Genres</h3>
                <p>
                  {movieDetails.genres && movieDetails.genres.length > 0
                    ? movieDetails.genres.map(genre => genre.name).join(', ')
                    : ''}
                </p>
              </div>
            </div>

            <div className={styles.addInfBox}>
              <h2>Additional information</h2>
              <div className={styles.buttonBox}>
                <NavLink to="reviews">Reviews</NavLink>
                <NavLink to="cast">Cast</NavLink>
              </div>
            </div>
          </div>
        )}
         <Suspense>
        <Routes >
          <Route path="reviews" element={<MovieReviews />} />
          <Route path="cast" element={<MovieCast />} />
        </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
