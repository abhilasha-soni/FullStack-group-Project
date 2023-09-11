import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/types";
import axios from "axios";
import { Button } from "@mui/material";

import { userActions } from "../redux/slices/user";
import { fetchUserData } from "../redux/thunks/userListThunk";

export default function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  const userList = useSelector((state: RootState) => state.users.userList);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const handleBlockUser = (userId: string) => {
    dispatch(userActions.toggleBlocked(userId)); 
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th style={{ padding: "8px" }}>Username</th>
              <th style={{ padding: "8px" }}>Role</th>
              <th style={{ padding: "8px" }}>Email</th>
              <th style={{ padding: "8px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user._id}>
                <td style={{ padding: "8px" }}>{`${user.firstName} ${user.lastName}`}</td>
                <td style={{ padding: "8px" }}>{user.role}</td>
                <td style={{ padding: "8px" }}>{user.email}</td>
                <td style={{ padding: "8px" }}>
                  <Button onClick={() => handleBlockUser(user._id)}>
                    {user.blocked ? "Unblock" : "Block"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}