import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch, Product } from "../types/types";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router-dom";

import { fetchProductData } from "../redux/thunks/productListThunk";
import ProductCard from "./ProductCard";
import AdminProductCard from "../components/admin/AdminProductCard";
import AdminNavBar from "../components/admin/AdminNavBar";

export default function AdminProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector(
    (state: RootState) => state.products.products
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const location = useLocation();
  const searchQuery = location.state?.searchQuery;

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  const filteredProducts = searchQuery
    ? productList.filter((product: Product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : productList;

  

  return (
    <div>
      <AdminNavBar />
      <Grid container spacing={1} m={1}>
        {filteredProducts?.map((product: Product) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={product.designerId}>
            <AdminProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
