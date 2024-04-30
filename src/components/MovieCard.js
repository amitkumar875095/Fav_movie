import React from "react";
import {addFavMovies,removeFavMovies} from "../actions"
class MovieCard extends React.Component{
    handleFavMovie = (movie)=>{
        const {store} = this.props.store;
        console.log(store);
    
          store.dispatch(addFavMovies(movie));
          console.log(store.getState());
          
    }
    handleUnFavMovie = (movie)=>{
        const {store} = this.props.store;
        console.log(store);
    
          store.dispatch(removeFavMovies(movie));
          console.log(store.getState());
    }
    isfav = () =>{
        const movie = this.props.movie;
        const {fav} = this.props.store.store.getState().movies;
        const index = fav.indexOf(movie);
        console.log("fav ",fav,index);
        if(index==-1){
            return false;
        }
        return true;
    }
 render(){
      const {Poster,Title,Plot,Ratings} = this.props.movie;
      console.log(this.props.store.movies);
      console.log("moviescart",this.props.store);
      const {fav} = this.props.store.store.getState().movies;
      
    return (
        <div className="movie-cart">
           <div className="movie-left">
            <img src = {Poster}alt="" style={{width : "100%" ,height : "100%"}} />
           </div>
           <div className="movie-right">
            <div className="movie-title" style={{fontWeight: "700", fontSize : "1.5rem" , marginBottom : "5vh"}}>{Title}</div>
            <div className="movie-description" style={{fontSize : "1rem",fontWeight : "520", lineHeight : "1.5rem"}} >{Plot}</div>
            <div className="movie-rating">
                {Ratings[0].Value} 
            </div>
            
              { !this.isfav() ? <button onClick={()=>{this.handleFavMovie(this.props.movie)}} className={`tab `}>Favourite button</button> :
                 <button onClick={()=>{this.handleUnFavMovie(this.props.movie)}}>UnFavourite button</button>}
            
           </div>
        </div>
    )
 }
}
export default MovieCard
