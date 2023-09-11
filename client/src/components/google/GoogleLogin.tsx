import React, { useState } from "react";
import axios from "axios";

import { GoogleLogin } from "@react-oauth/google";
import user from "./user.png";
import { userActions } from "../../redux/slices/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/types";
import { useNavigate } from "react-router-dom";

export type UserGoogle = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

export default function GoogleLogIn() {
  const [userGoogle, setUserGoogle] = useState<UserGoogle>({
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    avatar: user,
  });

  const navigate = useNavigate();
   const dispatch = useDispatch<AppDispatch>();
  // function
  return (
    <div>
      <h1>GoogleLogIn</h1>
      <GoogleLogin
        // type="icon"
        size="medium"
        shape="rectangular"
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse, "credential");
          const url = "http://localhost:8000/users/google-login";
          const credential = credentialResponse.credential;
          let res = await axios.post(url, { id_token: credential });
          if (res.status === 200) {
            console.log(res, "response from BE");
            dispatch(userActions.setUserData(res.data.userData));
            setUserGoogle(res.data.userData);
            navigate("/products");
          } else {
            alert("Login false");
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      
    </div>
  );
}
