import React, { useState } from "react";
import {
  AppDispatch,
  Product,
  ProductCardProps,
  RootState,
} from "../../types/types";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toLove from "../../asserts/images/love.gif";
import loveGif from "../../asserts/images/heart.gif";
import newtag from "../../asserts/images/new.png";
import saleGif from "../../asserts/images/sale.gif";


import { productActions } from "../../redux/slices/productList";

export default function AdminProductCard({
  product,
  isNewCollection,
}: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  // const [dialogOpen, setDialogOpen] = useState(false);


  const handleMouseEnter = (index: number) => {
    if (product.images.length > 1) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(0);
  };

 

  return (
    <Card className="product-card">
      {isNewCollection && (
        <img
          src={newtag}
          alt="New Tag"
          style={{
            position: "absolute",
            top: -3,
            right: 5,
            width: 35,
            height: 35,
          }}
        />
      )}
      {product.discountPercentage != null && (
        <img
          src={saleGif}
          alt="Sale"
          style={{
            position: "absolute",
            top: -3,
            left: 5,
            width: 35,
            height: 35,
          }}
        />
      )}
      <Link to={`/adminProducts/${product._id}`}>
        <CardMedia
          component="img"
          image={product.images[hoveredIndex || 0]}
          alt={`Product Image ${hoveredIndex || 0}`}
          onMouseEnter={() =>
            handleMouseEnter(hoveredIndex ? hoveredIndex + 1 : 1)
          }
          onMouseLeave={handleMouseLeave}
          height="180"
          style={{ objectFit: "cover" }}
        />
      </Link>
      <div className="quick-shop-button">
        {/* <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleOpenDialog}
        >
          Quick shop
        </Button> */}
      </div>
      <CardContent>
        {product.discountPercentage && product.discountPercentage != null ? (
          <>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontSize: "10px",
                textDecoration: "line-through",
                color: "gray",
              }}
            >
              Price: ${product.price}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "10px" }}
            >
              Sale Price: ${product.salePrice}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "10px" }}
            >
              Discount: {product.discountPercentage}%
            </Typography>
          </>
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontSize: "10px" }}
          >
            Price: ${product.price}
          </Typography>
        )}
      </CardContent>
      <div>
        <Link to={`/adminProducts/${product._id}`}>
          <Button>Edit</Button>
        </Link>
      </div>
      {/* <ProductDetailsDialog open={dialogOpen} onClose={handleCloseDialog} /> */}
    </Card>
  );
}
