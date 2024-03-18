import { createSlice } from '@reduxjs/toolkit'

const initState = { value: 0, showCounter: true }
// console.log('initState')

const CounterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increase: (state, action) => {state.value += action.payload},
        decrease: (state, action) => {state.value -= action.payload},
        toggleConter: (state) => {state.showCounter = !state.showCounter},
    }
})
export const counterAction = CounterSlice.actions

export default CounterSlice.reducer;
