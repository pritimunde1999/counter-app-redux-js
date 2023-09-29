import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer.js";


const store = createStore(counterReducer)

export default store;


// store.dispatch(increase(5)) ===>({type:INCREASE, value:5}) ===> this come from increase function 
//store.dispatch({type:INCREASE, value:5})====> will trigger counterReducer
//  counterReducer(0,{type:INCREASE, value:5})

