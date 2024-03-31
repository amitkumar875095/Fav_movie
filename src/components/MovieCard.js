import React from "react";
class MovieCard extends React.Component{
 render(){
      const {Poster,Title,Plot,Ratings} = this.props.movie;
     console.log(Ratings);
  
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
            
                <button>Favourite button</button>
            
           </div>
        </div>
    )
 }
}
export default MovieCard
