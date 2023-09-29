import { INCREASE,DECREASE,RESET } from "./actionType.js"



//actions are object in redux

// const inc = {
//     type : "INCREASE"
// }

//action creator ==> function ==> return actions

export const increase = (value) =>{
    return({
        type : INCREASE,
        value : value
    })
}

export const decrease = (value) =>{
    return({
        type : DECREASE,
        value: value
    })
}

export const reset = () =>{
    return({
        type : RESET
    })
}
