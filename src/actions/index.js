export  const ADD_MOVIES = 'ADD_MOVIES';
export const FAV_MOVIE = 'FAV_MOVIE';
export const UN_FAV = 'UN_FAV';
export const SHOW_FAV = 'SHOW_FAV'; 
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