import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation: null,
    deliveryMedium:{name:'car',amount: 100},
    deliveryType: 'Instant',
    deliveryDetails: null
   
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setOrigin: (state,action)=>{
            state.origin = action.payload
        },
        setDestination: (state,action)=>{
            state.destination = action.payload
        },
        setTravelTimeInformation: (state,action)=>{
            state.travelTimeInformation = action.payload
        },
        setDeliveryMedium: (state,action)=>{
            state.deliveryMedium = action.payload
        },
        setDeliveryType: (state,action)=>{
            state.deliveryType = action.payload
        } ,
        setDeliveryDetails: (state,action)=>{
            state.deliveryDetails = action.payload
        }
    }
});

export const { 
    setOrigin, 
    setDestination,
     setTravelTimeInformation,
     setDeliveryMedium,
     setDeliveryType,
     setDeliveryDetails
    } = navSlice.actions

    // selectors

    export const selectOrigin = (state) => state.nav.origin;
    export const selectDestination = (state) => state.nav.destination;
    export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
    export const selectDeliveryMedium = (state) => state.nav.deliveryMedium;
    export const selectDeliveryType = (state) => state.nav.deliveryType;
    export const selectDeliveryDetails = (state) => state.nav.deliveryDetails;


    export default navSlice.reducer;