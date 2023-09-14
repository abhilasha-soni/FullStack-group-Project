import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/types";
import axios from "axios";
import { Button } from "@mui/material";

import { BASE_URL } from "../api";
import { userActions } from "../redux/slices/user";
import { fetchUserData } from "../redux/thunks/userListThunk";
import Pagination from "../components/Pagination";

export default function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  const userList = useSelector((state: RootState) => state.users.userList);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(userList.length / itemsPerPage);
  console.log(totalPages, "totalP");
  console.log(userList.length, "length");

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const handleBlockUser = (userId: string, blocked: boolean) => {
    const action = blocked ? "unblock" : "block";
    const endPoint = `${BASE_URL}/users/${userId}/${action}`;

    axios
      .put(endPoint)
      .then(() => {
        dispatch(userActions.toggleBlocked(userId));
      })
      .catch((error) => {
        console.error(`Error ${action}ing user:`, error);
      });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleUser = userList.slice(startIndex, endIndex);

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
            {visibleUser.map((user) => (
              <tr key={user._id}>
                <td
                  style={{ padding: "8px" }}
                >{`${user.firstName} ${user.lastName}`}</td>
                <td style={{ padding: "8px" }}>{user.role}</td>
                <td style={{ padding: "8px" }}>{user.email}</td>
                <td style={{ padding: "8px" }}>
                  <Button
                    onClick={() => handleBlockUser(user._id, user.blocked)}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}                           
            />
        </div>
      </div>
    </div>
  );
}
