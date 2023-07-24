import axios from 'axios';

const API_KEY = '37244e55abf3f6dfeaa909abea58e77f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const params = {
  api_key: API_KEY,
};

export async function fetchMoviesNet() {
  try {
    const response = await axios.get('trending/all/day', { params });
    return response.data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, { params });
    return response.data.cast;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, { params });
    return response.data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchSearchedMovie(query) {
  const params = {
    api_key: API_KEY,
    query: query,
  };

  try {
    const response = await axios.get('search/movie?', { params });
    return response.data.results;
  } catch (error) {
    throw error;
  }
}
