import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  productDetail : Product | null;
};

const initialState:InitialState = {
  productDetail :null,
};

const adminProductSlice = createSlice ({
  name:"adminProducts",
  initialState,
  reducers:{
    setProductData: (state, action: PayloadAction<Product>) => {
      state.productDetail = action.payload
    },
    clearProductData: (state) =>{
      state.productDetail = null;
    },

getProductDetail: (state, action: PayloadAction<Product>) => {
      state.productDetail = action.payload;
    },

  },
});

export const adminProductActions = adminProductSlice.actions;
const adminProductReducer = adminProductSlice.reducer;
export  default adminProductReducer;