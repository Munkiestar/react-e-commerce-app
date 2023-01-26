import React, { useState } from "react";
import "./Product.scss";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch.js";
import { useParams } from "react-router-dom";

function Product(props) {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const TOKEN = import.meta.env.VITE_API_UPLOAD_URL;
  const IMG = data?.attributes?.img?.data?.attributes?.url || "";
  const IMG2 = data?.attributes?.img2?.data?.attributes?.url || "";
  return (
    <div className="product">
      {loading ? (
        "Loading.."
      ) : (
        <>
          <div className="left">
            <div className="imgs">
              <img
                src={TOKEN + IMG}
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={TOKEN + IMG2}
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  TOKEN + data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prevState) =>
                    prevState === 1 ? 1 : prevState - 1
                  )
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prevState) => prevState + 1)}>
                +
              </button>
            </div>

            <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>{" "}
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
