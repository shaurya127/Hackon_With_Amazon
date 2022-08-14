import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/books";

const Books = () => {
  const { books } = useContext(BookContext);

  if (!books.length) {
    return <h3>No products Available</h3>;
  }

  return (
    <section className="books">
      {books.map(({ image: image, id, title, price: price, address }) => (
        <article key={id} className="book">
          <div className="book-image">
            <img src={image} alt={title} />
            <h6>Price - RS {price}</h6>
            <h6>Address- {address}</h6>
          </div>
          <Link to={`products/${id}`} className="btn book-link">
            details
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Books;
