export  const ADD_MOVIES = 'ADD_MOVIES';
export const FAV_MOVIE = 'FAV_MOVIE';
export const UN_FAV = 'UN_FAV';
export const SHOW_FAV = 'SHOW_FAV'; 
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
// action creater 
export function addMovies (movies) {
     return {
  type : ADD_MOVIES,
  movies : movies,
     }
    }
    export function addFavMovies(movie){
      return {
         type : FAV_MOVIE,
         movie : movie,
      }
    }
    export function removeFavMovies(movie){
           return {
            type : UN_FAV,
            movie : movie,
           }
    }
    export function showFavourite(val){
           return {
            type : SHOW_FAV,
             istrue : val,
           }
    }
    export function handleMovieSearch(movie){
      console.log("function call ")
      const url = `https://www.omdbapi.com/?apikey=fd2827ff&t=${movie}`;
      return function (dispatch){
        console.log("API CALL ");
      fetch(url)
      .then(response => response.json()).then(movie=>{
         console.log(movie);
         //dispatch an action
         console.log("AFTER API CALL ");
         dispatch(addSearchMovie(movie))
      }
      
      )} 
    }
    export function addSearchMovie (movie){
      return {
        type : ADD_SEARCH_RESULT,
           movie 
      }
    }