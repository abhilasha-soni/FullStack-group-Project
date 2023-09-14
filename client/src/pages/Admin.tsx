import React from "react";
import { Link } from "react-router-dom";

import companyLogo from "../asserts/images/logo.png";

export default function Admin() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Link
          to="/admin"
          style={{
            color: "rgb(0, 0, 0)",
            textAlign: "center",
            backgroundColor: "rgb(255, 233, 174)",
            textDecoration: " none",
            padding: "1.5rem",
            width: "10vmax",
            height: "10vmax",
            margin: "2rem",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/adminProducts"
          style={{
            color: "rgb(0, 0, 0)",
            textAlign: "center",
            backgroundColor: "rgb(97, 194, 162)",
            textDecoration: " none",
            padding: "1.5rem",
            width: "10vmax",
            height: "10vmax",
            margin: "2rem",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          All Products
        </Link>

        <Link
          to="/admin"
          style={{
            color: "rgb(0, 0, 0)",
            textAlign: "center",
            backgroundColor: "rgb(247, 163, 177)",
            textDecoration: " none",
            padding: "1.5rem",
            width: "10vmax",
            height: "10vmax",
            margin: "2rem",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          Add product
        </Link>

        <Link
          to="/admin/users"
          style={{
            color: "rgb(0, 0, 0)",
            textAlign: "center",
            backgroundColor: "rgb(34, 192, 212)",
            textDecoration: " none",
            padding: "1.5rem",
            width: "10vmax",
            height: "10vmax",
            margin: "2rem",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          Users
        </Link>
      </div>
      <div></div>
    </div>
  );
}
