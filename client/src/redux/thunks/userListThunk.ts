import axios from "axios";
import { BASE_URL } from "../../api";
import { AppDispatch } from "../../types/types";
import { userActions } from "../slices/user";

export function fetchUserData() {
  const userUrl = `${BASE_URL}/users`;
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(userUrl);
      const userData = await response.data;      
      dispatch(userActions.setUserList(userData));
    } catch (error) {
      console.error("Error in fetching product data: ", error);
    }
  };
}
