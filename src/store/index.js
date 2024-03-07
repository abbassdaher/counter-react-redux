import { createStore } from "redux"

const initState = { value: 0, showCounter: true }
// console.log('initState')
const counterReducer = (state = initState, action) => {
    if (action.type === 'increase') {
         return{...state, value: state.value + action.payload }
    }
    if (action.type == 'decrease') {
        return { ...state, value: state.value - action.payload }
    }
    if (action.type == 'toggleConter') {
        return { ...state, showCounter: !state.showCounter }
    }
    return ( state);
}
const store = createStore(counterReducer)
export default store