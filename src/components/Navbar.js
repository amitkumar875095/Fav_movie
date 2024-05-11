import React from "react";
import { search } from "../reducers";
import {handleMovieSearch , addMovies} from '../actions'

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearchResults : true,
            searchText : '',
        }
    }
    handleAddToMovies = (movie)=>{
       
        this.props.store.store.dispatch(addMovies(movie));
        this.setState({
            showSearchResults : false,
        })
    }
    handleSearch = ()=>{
        console.log(this.props);
        const {searchText} = this.state;
        this.props.store.store.dispatch(handleMovieSearch(searchText))
        
    }
    handleChange = (e)=>{
        console.log("pressed");
        this.setState({
            searchText : e.target.value,
            
        })
    }
    render(){
        const {result} = this.props.search;
        return(
            <div className="nav">
               
              
                   <input type="text"name="movie_name" className="search-box" onChange={this.handleChange}/>
                <button className = "search-button" onClick={this.handleSearch}>Search</button>
               
            </div>
        )
    }
}
export default Navbar;