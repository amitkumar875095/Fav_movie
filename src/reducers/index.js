import { ADD_MOVIES , FAV_MOVIE,UN_FAV, SHOW_FAV,ADD_SEARCH_RESULT} from "../actions";
import { combineReducers } from "redux";

const initialMovieState = {
    list : [],
    fav : [],
    istrue : false,
}
export  function movies (state = initialMovieState,action){
   
     switch (action.type){
         case ADD_MOVIES :
         return {
            ...state,
            list : action.movies,
         }
        case FAV_MOVIE :
         return {
            ...state,
            fav : [action.movie,...state.fav]
            
         }
         case UN_FAV : 
        const newfav = state.fav.filter( movie=>
             movie.Title != action.movie.Title
            );
         return {
             ...state,
             fav : newfav,
         }
         case SHOW_FAV : 
           return {
            ...state,
            istrue : action.istrue,
           }
        default :           
         return state   
     }
     
    }
   
const initialSearchState = {
     result : {},
}
export function search (state = initialSearchState,action){
    switch (action.type){
        case ADD_SEARCH_RESULT :
            return {
                ...state,
                result : action.movie
            }
       default :           
        return state   
    }
   
}
const initialRootState = {
    movies : initialMovieState,
    search : initialSearchState,
};
// export  default function rootReducer(state = initialRootState,action){
//     return {
//         movies : movies(state.movies,action),
//         search : search(state.search,action),
//     }
// }
export default combineReducers({
    movies : movies,
    search : search,
})
