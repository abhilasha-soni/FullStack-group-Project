import React, { ChangeEvent, FormEvent, useState } from 'react';
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { SearchFormProps } from '../../types/types';
import { Button, Drawer, IconButton, Input } from '@mui/material';


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "white",
  borderWidth: 1.5,
  borderRadius: 5,
  marginLeft: 0,
  padding: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: 600,
    height: 40,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgb(71,98,87)",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "rgb(71,98,87)",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 700,
      height: 25,
    },
  },
}));



export default function SearchForm({ onSubmit }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };


  return (
    <>
      {/* <IconButton color="inherit" aria-label="search" onClick={toggleDrawer}>
        <SearchTwoToneIcon />
      </IconButton> */}
      {/* <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer} sx={{
          '& .MuiDrawer-paper': {
            height: '100px', 
          },
        }}> */}
      <form onSubmit={handleSubmit}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for Gold jewellery, diamond jewellery and more..."
            inputProps={{ "aria-label": "search anything here...." }}
            onChange={handleInputChange}
          />
        </Search>
        {/* <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button type="submit">Search</Button> */}
      </form>
      {/* </Drawer> */}
    </>
  );
}