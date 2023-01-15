import React, { useState } from "react";
import "./Navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "@mui/material";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

const Navbar = () => {
  const [openShoppingCart, setOpenShoppingCart] = useState(false);

  return (
    <div className="nav">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>{" "}
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>{" "}
          <div className="item">
            <Link to="/products/3">Kids</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">OHARA Store</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/">Home</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="item">
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className="cartIcon"
              onClick={() => setOpenShoppingCart((prevState) => !prevState)}
            >
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {/* show/hide shopping cart */}
      {openShoppingCart && <ShoppingCart />}
    </div>
  );
};

export default Navbar;
