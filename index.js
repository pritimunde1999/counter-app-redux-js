import { increase, reset,decrease } from "./redux/actions/counterActions.js";
import store from "./redux/store.js";


//getstore

//dispatch 

console.log("Initial Value",store.getState())

//subcribe to store ===> it will run whenever store is get updated 
//so no need to write console.log after every dispatch call

store.subscribe(()=>{
    console.log("Updated Value", store.getState())
})


store.dispatch(increase(5))
store.dispatch(increase(2))
// store.dispatch(increase())
store.dispatch(decrease(3))
// store.dispatch(increase())
// store.dispatch(reset())