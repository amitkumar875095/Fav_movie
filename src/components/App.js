import React from "react";
 import {data} from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import { StoreContext } from "../index";
import { addMovies,showFavourite } from "../actions";

class  App extends React.Component {
 componentDidMount(){
    //make api call 
    //dispactch action
    console.log("hii");
    const {store} = this.props;
    store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    
       store.dispatch(addMovies(data));
       console.log(store.getState());
 }
changeTab = (val)=>{
  const {store} = this.props;
  console.log("tab pressed");
  store.dispatch(showFavourite(val))
}

  render(){
    console.log("render",this.props)
   const {movies,search} = this.props.store.getState();
     
  const {list,istrue,fav} =   movies;
    const display = istrue ? fav : list;
  return (
    <div className="App">
     <Navbar store = {this.props} search = {search}/>
     <div className="main" >
      <div className="tabs">
         <div className= {istrue? 'tab': 'tab active-tab'} onClick={()=>{ this.changeTab(false)
         }}>
            Movies
         </div>
         <div className={`tab ${istrue?  'active-tab': '' }`} onClick={()=>{ this.changeTab(true)
         }}>
          Favourites
         </div>
         </div>
    
    
    {  display.map( (movie,index) => (
     <MovieCard movie = {movie} store = {this.props} key = {index}/>) 
      )}   
     </div>
     <div>
      {display.length==0? <div>NO Movies to display</div> : null}
     </div>
    </div>
  );
}}
class AppWrapper extends React.Component{
  render(){
    return(
      <StoreContext.Consumer>
        {(store)=> <App store = {store}/>}
      </StoreContext.Consumer>
    )
  }
}
export default AppWrapper;
