import { createSlice , createStore} from '@reduxjs/toolkit'

const initState = { value: 0, showCounter: true }
// console.log('initState')

const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increase: (state, action) => {state.value += action.payload},
        decrease: (state, action) => {state.value -= action.payload},
        toggleConter: (state) => {state.showCounter = !state.showCounter},
    }
})

// const counterReducer = (state = initState, action) => {
//     if (action.type === 'increase') {
//          return{...state, value: state.value + action.payload }
//     }
//     if (action.type == 'decrease') {
//         return { ...state, value: state.value - action.payload }
//     }
//     if (action.type == 'toggleConter') {
//         return { ...state, showCounter: !state.showCounter }
//     }
//     return ( state);
// }
const store = createStore(counterSlice.reducer)
export const counterAction = counterSlice.actions
export default store