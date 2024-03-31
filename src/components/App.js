import React from "react";
import {data} from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
function App() {
  console.log();
  return (
    <div className="App">
     <Navbar />
     <div className="main" >
      <div className="tabs">
         <div className="tab">
            Movies
         </div>
         <div className="tab">
          Favourites
         </div>
         </div>
    
    
    {  data.map( (movie) => (
     <MovieCard movie = {movie}/>) 
      )}   
     </div>
    </div>
  );
}

export default App;
