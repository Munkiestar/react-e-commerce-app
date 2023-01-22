import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card.jsx";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);

  console.log("type", type);

  const URL = import.meta.env.VITE_API_URL;
  const TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resData = await axios.get(
          `${URL}/products?populate=*&filters[type][$eq]=${type}`,
          {
            headers: {
              Authorization: "bearer " + TOKEN,
            },
            // await axios.create({
            // baseURL: URL,
            // headers: {
            //   Accept: "application/json",
            //   "Content-Type": "application/json;charset=UTF-8",
            //   Authorization: "bearer " + TOKEN,
            // },
          }
        );

        setProducts(resData.data.data);
      } catch (err) {
        console.log("ERR: ", err);
      }
    };
    fetchProducts();
  }, []);

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
        {products?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
