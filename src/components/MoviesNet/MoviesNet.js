import React from 'react';
import MoviesNetItem from '../MoviesNetItem/MoviesNetItem';
import styles from './MoviesNet.module.css';

const MoviesNet = ({ dayMovies }) => {
  return (
    <ul className={styles.MoviesNetList}>
      {dayMovies.map( ({id, title, name, poster_path, first_air_date, release_date}) => (
        <MoviesNetItem
          key={id}
          movieId={id}
          title={title ? title : name}
          poster={poster_path}
          year={first_air_date ? first_air_date : release_date}
        />
      ))}
    </ul>
  );
};

export default MoviesNet;
