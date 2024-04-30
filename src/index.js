import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';

import './index.css';
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log(store);

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{name : 'superman'}],
// })
// console.log("after State",store.getState());
//MiddleWare
const logger = function ({dispatch,getState}){
   return function(next){
    return function(action){
        console.log("Action Type",action);
        next();
    }
   }
}
 console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'),applyMiddleware(logger));
root.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>
);

