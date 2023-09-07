import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import FiberNewOutlinedIcon from "@mui/icons-material/FiberNewOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

import shop from "../../asserts/images/shop.png";
import new1 from "../../asserts/images/new1.png";
import sale from "../../asserts/images/sale.png";
import user from "../../asserts/images/account.png";
import cart from "../../asserts/images/bag.png";
import wish from "../../asserts/images/fav.png";


export default function NavBarMenu() {
  

  return (
    <List
      style={{
        width:250,
        height:100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       padding:0,
       marginBottom:20,
      }}
    >
      <ListItem component={Link} to="/new">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "rgb(71,98,87)",
            marginBottom:-10}}
        >
          <img
            src={new1}
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
          <ListItemText primary="New" />
        </div>
      </ListItem>
      <ListItem component={Link} to="/products" className="navbar-menu-item">
        {" "}
        <span className="icon-text" style={{ color: "rgb(71,98,87)" ,marginBottom:-10}}>
          <img
            src={shop}
            alt="Logo"
            style={{ width: "35px", height: "35px" }}
          />
          Shop
        </span>
      </ListItem>
      {/* <ListItem component={Link} to="/about" className="navbar-menu-item">
        {" "}
        <span className="icon-text">About</span>
      </ListItem> */}
      <ListItem component={Link} to="/sale" className="navbar-menu-item">
        {" "}
        <span className="icon-text" style={{ color: "rgb(71,98,87)", marginBottom:-5 }}>
          {" "}
          <img
            src={sale}
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
          Sale
        </span>
      </ListItem>
      
   </List>
  );
}