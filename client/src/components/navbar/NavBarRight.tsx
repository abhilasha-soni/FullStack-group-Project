import React, { useEffect, useState } from "react";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import PortraitTwoToneIcon from "@mui/icons-material/PortraitTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, NavBarRightProps, Product, RootState } from "../../types/types";
import { Badge, IconButton } from "@mui/material";
import User from "../../pages/User";
import { productActions } from "../../redux/slices/productList";
import user from "../../asserts/images/account.png";
import cart from "../../asserts/images/bag.png";
import wish from "../../asserts/images/fav.png";


export default function NavBarRight({
  cartItems,
  isLoggedIn,
}: NavBarRightProps) {

  
  const searchResult = useSelector((state: RootState) => state.products.searchResult);
  const productList = useSelector(
    (state: RootState) => state.products.products
  );

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [filteredProducts, setFilteredProducts] =
  useState<Product[]>(productList);


  const navigate = useNavigate(); 
  const dispatch = useDispatch<AppDispatch>();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleFavoriteClick = () => {
    navigate('/favorites'); 
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim() === "") {
      navigate("/products");
    } else {
      dispatch(productActions.searchProduct(searchQuery));
      setIsSearchOpen(false);     
      navigate("/products", {
        state: {
          searchQuery,
        },
      });
    }
  };

  useEffect(() => {
    if (searchResult.length > 0) {
      setFilteredProducts(searchResult);
    } else {
        setFilteredProducts(productList);
      }    
  }, [searchResult, productList]);

  return (
    <List
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 250,
        height: 100,
        padding: 0,
        marginBottom: 25,
      }}
    >
      <ListItem component={Link} to="/favorites" className="navbar-menu-item">
        {" "}
        <span
          className="icon-text"
          style={{
            color: "rgb(71,98,87)",
            display: "flex",
            flexDirection: "column",
            marginBottom: -20,
          }}
        >
          {" "}
          <img
            src={wish}
            alt="Logo"
            style={{ width: "35px", height: "35px" }}
          />
          Wishlist
        </span>
      </ListItem>

      {!isLoggedIn ? (
        <>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ marginRight: 20, marginBottom: -23 }}
          >
            <IconButton
              color="inherit"
              aria-label="user"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img
                src={user}
                alt="Logo"
                style={{ width: "35px", height: "35px" }}
              />{" "}
              <p
                style={{
                  fontSize: 16,
                  padding: 5,
                  margin: 0,
                  color: "rgb(71,98,87)",
                }}
              >
                Account
              </p>
            </IconButton>
            {isHovering && (
              <User open={isHovering} onClose={() => setIsHovering(false)} />
            )}
          </div>
          <Link
            to="/shopping-cart"
            style={{ textDecoration: "none", marginBottom: -23 }}
          >
            <IconButton
              color="inherit"
              aria-label="shopping bag"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* <Badge badgeContent={cartItems} color="secondary"> */}
              <img
                src={cart}
                alt="Logo"
                style={{ width: "35px", height: "35px" }}
              />
              <p
                style={{
                  fontSize: 16,
                  padding: 5,
                  margin: 0,
                  color: "rgb(71,98,87)",
                  textDecoration: "none",
                }}
              >
                Cart
              </p>
              {/* </Badge> */}
            </IconButton>
          </Link>
        </>
      ) : (
        <>
          <Link to="/user-profile">
            <IconButton color="inherit" aria-label="account">
              <PortraitTwoToneIcon />
            </IconButton>
          </Link>
          <Link to="/shopping-cart">
            <IconButton color="inherit" aria-label="shopping bag">
              {/* <Badge badgeContent={cartItems} color="secondary"> */}
              <LocalMallTwoToneIcon />
              {/* </Badge> */}
            </IconButton>
          </Link>
        </>
      )}
    </List>

    //   {!isLoggedIn ? (
    //     <>
    //       <div
    //         onMouseEnter={handleMouseEnter}
    //         onMouseLeave={handleMouseLeave}
    //         style={{ display: "inline-block" }}
    //       >
    //         <IconButton color="inherit" aria-label="user">
    //           <img
    //             src={user}
    //             alt="Logo"
    //             style={{ width: "35px", height: "35px" }}
    //           />{" "}
    //           account
    //         </IconButton>
    //         {isHovering && (
    //           <User open={isHovering} onClose={() => setIsHovering(false)} />
    //         )}
    //       </div>
    //       <Link to="/shopping-cart">
    //         <IconButton color="inherit" aria-label="shopping bag">
    //           {/* <Badge badgeContent={cartItems} color="secondary"> */}
    //           <img
    //             src={cart}
    //             alt="Logo"
    //             style={{ width: "35px", height: "35px" }}
    //           />
    //           {/* </Badge> */}
    //         </IconButton>
    //       </Link>
    //     </>
    //   ) : (
    //     <>
    //       <Link to="/user-profile">
    //         <IconButton color="inherit" aria-label="account">
    //           <PortraitTwoToneIcon />
    //         </IconButton>
    //       </Link>
    //       <Link to="/shopping-cart">
    //         <IconButton color="inherit" aria-label="shopping bag">
    //           {/* <Badge badgeContent={cartItems} color="secondary"> */}
    //           <LocalMallTwoToneIcon />
    //           {/* </Badge> */}
    //         </IconButton>
    //       </Link>
    //     </>
    //   )}
    // </div>
  );
}

