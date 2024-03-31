import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <div className="nav">
               
              
                   <input type="text"name="movie_name" className="search-box"/>
                <button className = "search-button">Search</button>
               
            </div>
        )
    }
}
export default Navbar;