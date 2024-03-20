import { createSlice } from '@reduxjs/toolkit'

const initialState = { logedIn: false }

const AuthSlice = createSlice({
    name: 'logedIn',
    initialState: initialState,
    reducers: {
        setLogedIn: (state) =>  { state.logedIn = !state.logedIn }
    }
});
export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;