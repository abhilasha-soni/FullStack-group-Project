import  { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../types/types";
import { fetchProductDetail } from "../../redux/thunks/productDetailThunk";
import { Card, CardMedia, Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {Grid,IconButton,} from "@mui/material"
 

export default function ProductDetail() {
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );

  const dispatch = useDispatch<AppDispatch>();
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const productDetailParams = useParams<{ id: string }>();
  const productId = productDetailParams.id;

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [productId, dispatch]);

  if (!productDetail) {
    return <div>No information available</div>;
  }

  console.log(productId);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(0);
  };

  return (
    <div
      className="flexbox-container"
      style={{ display: "flex", justifyContent: "", alignContent: "center" }}
    >
      <div
        className="flexbox-item flexbox-item-1"
        style={{ width: "600px", margin: "60px" }}
      >
        <h3>{productDetail.title}</h3>
        <Card>
          <div style={{ maxWidth: "500px", margin: "30px" }}>
            <Carousel showThumbs={true}>
              {productDetail.images.map((image, index) => (
                <div key={index}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`Product Image ${index}`}
                    style={{
                      height: "500px",
                      objectFit: "cover",
                      marginLeft: "10px",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </Card>
      </div>
      <div
        className="flexbox-item flexbox-item-2"
        style={{ width: "500px",height:"700px",justifyContent: " center ", margin: "10px", border: "2px solid" ,  }}
      >
        <Container className="bb-5">
          <div
            className="nina-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              style={{ maxWidth: "1000px", margin: "50px", display: "flex" }}
            >
              <p>
                <h1>
                  <Typography
                    component="legend"
                    style={{ border: "100px", margin: "10px" }}
                  >
                    About The Jewellery
                  </Typography>
                </h1>
                {productDetail.description}
              </p>
            </div>
            <div>
              <h3> Product Detail </h3>
              <h6>style: {productDetail.style} </h6>
              <h6>color:{productDetail.color} </h6>
              <h6>collections:{productDetail.collections} </h6>
              <h6>occasions:{productDetail.occasions} </h6>
              <h6>material:{productDetail.material} </h6>
              <h6>price:{productDetail.price} </h6>
              {/*  <select className="my-3">
                  <option> Small </option>
                  <option> Large</option>
                </select> 
                <input type="number" value="1" />
                <button className="buy-btn">Add To Cart </button>
                */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
