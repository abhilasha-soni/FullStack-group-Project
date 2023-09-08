import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  ProductInfo : Product | null;
};

const initialState:InitialState = {
  ProductInfo :null,
};

const adminProductSlice = createSlice ({
  name:"adminProducts",
  initialState,
  reducers:{
    setProductData: (state, action: PayloadAction<Product>) => {
      state.ProductInfo = action.payload;
    },
    clearProductData: (state) =>{
      state.ProductInfo = null;
    },
  },
});

export const adminProductActions = adminProductSlice.actions;
const adminProductReducer = adminProductSlice.reducer;
export  default adminProductReducer;