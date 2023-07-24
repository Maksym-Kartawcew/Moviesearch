import React from 'react';
import MoviesNetItem from '../MoviesNetItem/MoviesNetItem';
import styles from './MoviesNet.module.css';

const MoviesNet = ({ dayMovies }) => {
  return (
    <ul className={styles.MoviesNetList}>
      {dayMovies.map(movie => (
        <MoviesNetItem
          key={movie.id}
          movieId={movie.id}
          title={movie.title ? movie.title : movie.name}
          poster={movie.poster_path}
          year={movie.first_air_date ? movie.first_air_date : movie.release_date}
        />
      ))}
    </ul>
  );
};

export default MoviesNet;
