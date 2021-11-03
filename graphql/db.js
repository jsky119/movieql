let movies = [
  {
    id: 0,
    name: "It Happend One Night",
    score: 99,
  },
  {
    id: 1,
    name: "MODERN TIMES",
    score: 98,
  },
  {
    id: 2,
    name: "The Wizard of OZ",
    score: 98,
  },
  {
    id: 3,
    name: "Black Panther",
    score: 96,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleandMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleandMovies.length) {
    movies = cleandMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
