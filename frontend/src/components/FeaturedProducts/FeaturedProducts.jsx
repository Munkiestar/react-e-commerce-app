import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card.jsx";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "ble vle",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "coat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "ble vle",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "ble vle",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];
const FeaturedProducts = ({ type }) => {
  return (
    <div className="products">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          dolores fugiat iure optio praesentium quae tempora ut vero! Architecto
          atque eligendi illum incidunt iste magni quam quas quibusdam repellat,
          voluptas!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
