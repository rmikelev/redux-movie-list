export const getMovieList = () => ({ type: 'GET_MOVIE_LIST' });
export const addMovieToList = (payload) => ({ type: 'ADD_MOVIE_TO_LIST', payload });
export const removeMovieList = (payload) => ({ type: 'REMOVE_MOVIE_FROM_LIST', payload });