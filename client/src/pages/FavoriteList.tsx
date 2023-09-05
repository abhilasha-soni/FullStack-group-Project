import React from "react";
import { useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";

import { RootState } from "../types/types";
import ProductCard from "./ProductCard";
import { Link, useNavigate } from "react-router-dom";

export default function FavoriteList() {
  const favoriteList = useSelector(
    (state: RootState) => state.products.favoriteList
  );

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const isFavoriteListEmpty = favoriteList.length === 0;

  return (
    <div>
      {isFavoriteListEmpty ? (
        <Typography variant="body1">No items found in favorites.</Typography>
      ) : (
        <Grid container spacing={1} m={1}>
          {favoriteList.map((item) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={item.designerId}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      )}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button variant="outlined" color="primary" onClick={handleGoBack}>
          Back
        </Button>
        <div style={{ marginLeft: "10px" }}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
