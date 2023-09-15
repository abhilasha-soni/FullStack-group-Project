import axios from "axios";

import { BASE_URL } from "../../api";
import { AppDispatch } from "../../types/types";
import { productDetailActions } from "../slices/productDetail";
// import { adminProductActions } from "../slices/adminProduct";

export function fetchAdminProductDetail(productId: string) {
  const productDetailUrl = `${BASE_URL}/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(productDetailUrl);
      const productDetailData = await response.data;
      dispatch(productDetailActions.getProductDetail(productDetailData));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
}
