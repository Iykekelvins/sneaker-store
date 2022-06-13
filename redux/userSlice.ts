import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shippingInfo: {
        first_name:"",
        last_name:"",
        address:"",
        address_two:"",
        country:"",
        city:"",
        state:"",
        phone_number:""
    },
    paymentInfo:{
        name:"",
        img:""
    }
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addInfo(state, action){
            state.shippingInfo = action.payload;
        },
        addPayment(state, action){
            state.paymentInfo.img = action.payload.img;
            state.paymentInfo.name = action.payload.name   
        }
    }  
})

export const { addInfo, addPayment } = userSlice.actions;

export const selectShippingInfo = (state: any) => state.user.shippingInfo;
export const selectAddress = (state: any) => state.user.shippingInfo.address;
export const selectPayment = (state: any) => state.user.paymentInfo

export default userSlice.reducer;