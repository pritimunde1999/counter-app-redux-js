import { INCREASE,DECREASE,RESET } from "../actions/actionType.js";

let initialState =0;

//state ==> current value of variable.
//actions ==> which action want to perform.

const counterReducer = (state=initialState,action) =>{
    
    switch(action.type){
       case INCREASE:
          return state + action.value

       case DECREASE:
          return state - action.value

       case RESET:
          return initialState

       default:
          return initialState
    }
}

export default counterReducer;