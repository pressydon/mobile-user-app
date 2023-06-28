import {createSlice} from '@reduxjs/toolkit'


const initialState = {

    allDeliveries:[]
}

export const deliverySlice = createSlice({
    name:'deliveries',
    initialState,
    reducers:{
      
        setAllDeliveries: (state,action)=>{
            state.allDeliveries = action.payload
        }
    }
});

export const { 
 
     setAllDeliveries
    } = deliverySlice.actions

    // selectors


    export const selectAllDeliveries = (state) => state.deliveries.allDeliveries;


    export default deliverySlice.reducer;