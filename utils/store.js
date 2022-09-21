
import {createSlice, configureStore} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
        signInForm:{
            email: "",
            password: "",
        },
    },
    reducers: {
        signIn: (state, action)=>{
            state.user = action.payload;
        },
        logOut: (state, action)=>{
            //async Storage sil
            state.user = null;
        },
        setSignInForm: (state,action) => {
            state.signInForm.email = action.payload.email || state.signInForm.email
            state.signInForm.password = action.payload. password || state.signInForm.password
        },
    },
});

export const {setSignInForm} = authSlice.actions

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});