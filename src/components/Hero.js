import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const Hero = () => {
  return (
    <section className="hero">
      <h2>Amazingshop</h2>
      <h3>
        Start saving time <br />
        and also money
      </h3>
      {/* <Link className="btn" to="/products">
        View All Products
      </Link> */}
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained secondary button group"
      >
        <Button size="large" variant="contained" color="secondary">
          <Link to="/products">View All Products</Link>
        </Button>
        <br />
        <Button size="large" variant="contained" color="secondary">
          <Link to="/searchproduct">Search products by distance</Link>
        </Button>
      </ButtonGroup>

      {/* <Link className="btn" to ="/seller">Become a seller</Link> */}
    </section>
  );
};

export default Hero;
