import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    success: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuceess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
           
            state.error = null;
        },
        signInFailure: (state, action) => {   
            state.error = action.payload;
            state.loading = false;

            
        },
    },
});

export const { signInStart, signInSuceess, signInFailure } = userSlice.actions;
export default userSlice.reducer; 