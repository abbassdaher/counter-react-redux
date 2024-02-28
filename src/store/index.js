import { createStore } from "redux"

const initState = { value: 0 ,  showCounter: true}
const counterReducer = (state = initState, action) => {
    console.log(action.type);
    if (action.type == 'increase') {
         return { ...state, value: state.value += 1 }
         } else if (action.type == 'decrease') {
        return { ...state, value: state.value -= 1 }
    }
    if(action.type == 'toggleConter'){
        return {...state, showCounter:!state.showCounter }
    }
    return state
}
const store = createStore(counterReducer)
export default store