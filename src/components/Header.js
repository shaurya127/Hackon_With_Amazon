import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="main-head">
      <nav style={{ display: "flex", justifyContent: "center" }}>
        <h1 id="logo">Amazingshop</h1>
        <ul>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/products">Products</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/cart">Cart</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/Admin">Become seller</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/createshop">Add your shop</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/searchshop">Search Shops</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
