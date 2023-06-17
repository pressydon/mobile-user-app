import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    loading: false,
  userInfo: {}, // for user object
//   userToken: null, 
  error: null,
  success: false, // for monitoring the registration process.
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuthLoading: (state,action)=>{
            state.loading = true,
            // state.userInfo = {},
            // state.userToken = null,
            // state.error = null,
            state.success = false
        },
        setUserInfo: (state,action)=>{
            state.loading = false,
            state.userInfo = action.payload,
            // state.userToken = null,
            // state.error = null,
            state.success = false
        },
        // setUserToken: (state,action)=>{
        //     state.loading = false,
        //     state.userInfo = {},
        //     state.userToken = action.payload,
        //     state.error = null,
        //     state.success = false
        // },
        setAuthError: (state,action)=>{
            state.loading = false,
            // state.userInfo = {},
            // state.userToken = null,
            state.error = action.payload,
            state.success = false
        }
        ,
        setAuthSuccess: (state,action)=>{
            // state.loading = false,
            // state.userInfo = {},
            // state.userToken = null,
            // state.error = null,
            state.success = true
        }
    }
});

export const { 
    setAuthLoading, 
    setUserInfo,
    //  setUserToken,
     setAuthError,
     setAuthSuccess
    } = authSlice.actions

    // selectors

    export const selectAuthLoading = (state) => state.auth.loading;
    export const selectUserInfo = (state) => state.auth.userInfo;
    // export const selectUserToken = (state) => state.auth.userToken;
    export const selectAuthError = (state) => state.auth.error;
    export const selectAuthSuccess = (state) => state.auth.success;


    export default authSlice.reducer;