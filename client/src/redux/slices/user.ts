import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../types/types";

type InitialState = {
  userInformation: User | null;
  userList: User[];
};

const initialState: InitialState = {
  userInformation: null,
  userList: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userInformation = action.payload;
    },
    clearUserData: (state) => {
      state.userInformation = null;
    },
    setUserList: (state, action: PayloadAction<User[]>) => {
      state.userList = action.payload;
    },
    toggleBlocked: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      const user = state.userList.find((u) => u._id === userId);
      if (user) {
        user.blocked = !user.blocked;
      }
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
