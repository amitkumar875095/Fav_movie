import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';

import './index.css';
import rootReducer from './reducers';
//MiddleWare
// const logger = function ({dispatch,getState}){
//   return function(next){
//    return function(action){
//        console.log("Action Type",action);
//        next(action);
//    }
//   }
// }

//modifing middleWre
const logger = ({dispatch,getState})=>(next) =>(action)=>{
  console.log("action-type",action);
  next(action);
}
const thunk = ({dispatch,getState})=>(next) =>(action)=>{
   if(typeof action == 'function'){
    console.log("Middleware call",dispatch);
    action(dispatch);
    console.log("action dispatch ")
    return ;
   }
  next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log(store);
export const StoreContext = createContext();

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{name : 'superman'}],
// })
// console.log("after State",store.getState());

class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return (
    <StoreContext.Provider value={store}>
     {this.props.children}
  </StoreContext.Provider>
    )
  }
}
 console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>  <App /></Provider>
    
  
 
);

