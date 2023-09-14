import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { BASE_URL } from "../../api";
import { AppDispatch, RootState } from "../../types/types";
import { adminProductActions } from "../../redux/slices/adminProduct";
import { fetchAdminProductDetail } from "../../redux/thunks/adminProductsThunk";
import AdminNavBar from "./AdminNavBar";


interface ProductState {
  _id: string;
  designerId: number;
  title: string;
  price: number;
  description: string;
  images: string[]; 
  quantity?: number;
  collections?: string;
  material?: string;
  color?: string;
  length?: string;
  closureType?: string;
  pendantDesign?: string;
  size?:string[];
  gemstone?: string;
  style?: string;
  occasions?: string;
  salePrice?: number;
  discountPercentage?: number;
  designerTouch?: string;
  availability: number;
}


export default function AdminEditProduct() {
  const [edit, setEdit] = useState(false);
  const [productInfo, setProductInfo] = useState<ProductState>({
    _id: "",
    designerId: 0,
    title: "",
    price: 0,
    description: "",
    images:[],
    quantity: 0,
    collections: "",
    material: "",
    color: "",
    length: "",
    closureType: "",
    pendantDesign: "",
    size: [],
    gemstone: "",
    style: "",
    occasions: "",
    salePrice: 0,
    discountPercentage: 0,
    designerTouch: "",
    availability: 0,
  });
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate= useNavigate();
  const productDetailsParams = useParams<{ id: string }>();
  const productId = productDetailsParams.id;
  useEffect(() => {
    if (productId) {
      dispatch(fetchAdminProductDetail(productId));
    }
  }, [productId, dispatch]);

  useEffect (() => {
    if (productDetail) {
      setProductInfo(productDetail)
    }
  }, [productDetail]);

  if (!productDetail) {
    return <div>No information available </div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`${BASE_URL}/products/${productId}`, productInfo);
      dispatch(adminProductActions.setProductData(productDetail));
      setEdit(false);
      navigate("/adminProducts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AdminNavBar />
      AdminEditProduct
      <TextField
        fullWidth
        label="Product title"
        name="title"
        value={productInfo.title}
        onChange={handleInputChange}
        disabled={!edit}
      ></TextField>
      <TextField
        fullWidth
        label="Price"
        name="price"
        value={productInfo.price}
        onChange={handleInputChange}
        disabled={!edit}
      ></TextField>
      <TextField
        fullWidth
        label="discountPercentage"
        name="discountPercentage"
        value={productInfo.discountPercentage}
        onChange={handleInputChange}
        disabled={!edit}
      ></TextField>
      <TextField
        fullWidth
        label="Sale Price"
        name="salePrice"
        value={productInfo.salePrice}
        onChange={handleInputChange}
        disabled={!edit}
      ></TextField>
      {edit ? (
        <Button variant="outlined" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleEditClick}>
          Edit
        </Button>
      )}
    </div>
  );
}
