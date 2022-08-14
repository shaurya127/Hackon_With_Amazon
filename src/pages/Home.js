import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Fetchbook from './Fetchbook'
import { BookContext } from "../context/books";

const Home = () => {
  const { featured } = useContext(BookContext);
  // console.log(featured);
  if (!featured.length){
    return <h3>No Featured Products</h3>;
  }
  return (
    <>
      
      <Hero />
      {/* <Fetchbook/> */}
      <section className="featured">
        <header className="featured-head">
          <h3>Some products</h3>
        </header>
        <div className="books featured-list">
          {featured.map(({ id, image, title }) => (
            <article key={id} className="book featured-book">
              <div className="book-image">
                <img src={image} alt={title} />
              </div>
              <Link to={`products/${id}`} className="btn book-link">
                details
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
