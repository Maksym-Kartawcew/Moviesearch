import React from 'react';
import styles from './MoviesNetItem.module.css';
import { Link, useLocation } from 'react-router-dom';

import placeholder from '../../images/cinema.png';

const MoviesNetItem = ({ title, poster, year, movieId }) => {
  const location = useLocation();

  return (
    <li className={styles.MoviesNetItem}>
      <Link to={`/movies/${movieId}`}>
      <img
       state={{ from: location }}
       src={poster ? `https://image.tmdb.org/t/p/w200/${poster}` : placeholder}
        alt={title}
        width="275"
      />
      <h3>{title}</h3>
      <p>Year: {year}</p>
      </Link>
    </li>
  );
};

export default MoviesNetItem;
