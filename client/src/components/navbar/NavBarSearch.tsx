import React, { JSX } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, Product, RootState } from "../../types/types";
import { Badge, IconButton } from "@mui/material";

import { productActions } from "../../redux/slices/productList";
import SearchForm from "../form/SearchForm";

interface MyIntrinsicAttributes extends JSX.IntrinsicAttributes {
  onSubmit?: (searchQuery: string) => void;
}

export default function NavBarSearch() {
  const searchResult = useSelector(
    (state: RootState) => state.products.searchResult
  );
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
    <div>
      <SearchForm onSubmit={handleSearch}/>
    </div>
  );
}
