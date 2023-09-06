import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import horizontalImage from "../asserts/images/lineIcon.jpg";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { RootState, AppDispatch, Product } from "../types/types";
import { fetchProductData } from "../redux/thunks/productListThunk";
import image_earring from "../asserts/images/earrings.jpg";
import image_collections1 from "../asserts/images/collections-1.jpg";
import image_collections2 from "../asserts/images/collections-2.jpg";
import image_collections3 from "../asserts/images/collections-3.jpg";
import image_collections4 from "../asserts/images/collections-4.jpg";
import image_collections5 from "../asserts/images/collections-5.jpg";

import banner1 from "../asserts/images/banner1.png";
import banner2 from "../asserts/images/banner2.png";
import banner3 from "../asserts/images/banner3.png";
import banner4 from "../asserts/images/banner4.png";

import { useNavigate } from "react-router-dom";
import {
  fetchCategoryList,
  fetchProductsByCategory,
} from "../redux/thunks/category";
import { productActions } from "../redux/slices/productList";

const CategoryCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(0),
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f8f8f8",
  },
}));

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const productList = useSelector(
    (state: RootState) => state.products.products
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);

  const handleCategoryCardClick = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
      dispatch(fetchProductData());
      navigate("/products");
    } else {
      setSelectedCategory(category);
      dispatch(fetchProductsByCategory(category));
      navigate(`/${category}`);
    }
  };

  const images = [
    image_earring,
    image_collections1,
    image_collections2,
    image_collections3,
    image_collections4,
    image_collections5,
  ];

  const randomProducts = useSelector(
    (state: RootState) => state.products.randomProducts
  );

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleCarouselChange = (index: number) => {
    setCurrentProductIndex(index);
    dispatch(productActions.setRandomProductIndex(index));
  };

  const handleShopNowClick = () => {
    navigate("/products");
  };

  const handleProductItemClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <img
        src={banner4}
        alt="Logo"
        className="navbar-logo-img"
        style={{ width: "100%" }}
      />
      <div className="line">
        <img src={horizontalImage} className="lineImg" alt="line" />
      </div>
      <Grid
        // container
        // spacing={2}
        // justifyContent="space-evenly"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          // margin: "auto",
          // backgroundColor: "green",
          width: "100%",
          // height: "500px",
          padding: 0,
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            margin: "20px",
            width: "50%",
            padding: "20px",
            border: "1px solid rgb(71,98,87)",
            borderRadius: "5px",
          }}
        >
          <Carousel images={images} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            margin: "20px",
            width: "50%",
            padding: 10,
            border: "1px solid rgb(71,98,87)",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              // width: 500,
              height: 400,
              margin: "auto",
              borderRadius: 3,
              // backgroundColor: "rgb(71, 98, 87, 0.5)",
              padding: 30,
            }}
          >
            <p
              style={{
                padding: 0,
                color: "black",
                fontSize: 24,
                marginTop: "-30px",
                marginBottom: "5",
              }}
            >
              Collections
            </p>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              style={{
                backgroundColor: "rgb(71, 98, 87, 0.1)",
                borderRadius: "5px",
              }}
            >
              {randomProducts && (
                <div className="offer-image-container">
                  {randomProducts.map((product, index) => (
                    <div
                      key={index}
                      style={{
                        display:
                          index === currentProductIndex ? "block" : "none",
                      }}
                      className="product-item"
                    >
                      <div className="product-content">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          onClick={() => handleProductItemClick(product._id)}
                        />
                        <div className="icon-container">
                          <IconButton
                            className="arrow-icon"
                            onClick={() =>
                              handleCarouselChange(
                                (currentProductIndex + 1) %
                                  randomProducts.length
                              )
                            }
                          >
                            <KeyboardArrowRightIcon />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Grid>
            <Button
              variant="contained"
              onClick={handleShopNowClick}
              sx={{
                width: 250,
                height: 30,
                backgroundColor: "#026955",
                border: "1px solid rgb(71,98,87)",
                padding: "5px 10px",
                margin: "10px",
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: "#c6e9de",
                  color: "rgb(71,98,87)",
                },
              }}
            >
              Shop Now
            </Button>
          </div>
        </Grid>
      </Grid>
      <div className="line">
        <img src={horizontalImage} className="lineImg" alt="line" />
      </div>
      <img
        src={banner3}
        alt="Logo"
        className="navbar-logo-img"
        style={{ width: "100%" }}
      />

      <div className="line">
        <img src={horizontalImage} className="lineImg" alt="line" />
      </div>
      <Typography variant="h4" align="center" gutterBottom>
        Shop by Category
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index}>
            <CategoryCard
              onClick={() => handleCategoryCardClick(category.categoryName)}
            >
              <CardMedia
                component="img"
                src={category.imageUrl}
                alt={category.categoryName}
                style={{ width: "270px", height: "225px", objectFit:"cover" }}
              />
              <Typography variant="h6" align="center">
                {category.categoryName}
              </Typography>
            </CategoryCard>
          </Grid>
        ))}
      </Grid>
      <div className="line">
        <img src={horizontalImage} className="lineImg" alt="line" />
      </div>

      <img
        src={banner2}
        alt="Logo"
        className="navbar-logo-img"
        style={{ width: "100%" }}
      />

      <div className="line">
        <img src={horizontalImage} className="lineImg" alt="line" />
      </div>
      
    </div>
  );
}
