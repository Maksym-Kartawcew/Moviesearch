import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { toastConfig } from '../components/Loader/toastConfig';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api/api';
import { Dna } from 'react-loader-spinner';

import styles from './Pages.module.css';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchReviewsData = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);

        setMovieReviews(reviews);
      } catch (error) {
        setError(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewsData();
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

      <div className={styles.MovieReviewsBox}>
        <h3>Reviews</h3>
        {movieReviews?.length > 0 ? (
          <ul>
            {movieReviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We do not have any reviews for this Movie.</p>
        )}
      </div>
    </div>
  );
};

export default MovieReviews;
