import { ADD_MOVIES , FAV_MOVIE,UN_FAV, SHOW_FAV} from "../actions";

const initialState = {
    list : [],
    fav : [],
    istrue : false,
}
export default function movies (state = initialState,action){
   
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
   

