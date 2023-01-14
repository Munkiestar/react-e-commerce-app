import React from "react";

import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.freeimages.com/clg/images/32/324144/water-drops-on-grey-background_f.jpg"
            alt=""
          />
          <button>
            <Link to={`/products/1`} className="link">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.freeimages.com/clg/images/32/324144/water-drops-on-grey-background_f.jpg"
            alt=""
          />
          <button>
            <Link to={`/products/1`} className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.freeimages.com/clg/images/32/324144/water-drops-on-grey-background_f.jpg"
            alt=""
          />
          <button>
            <Link to={`/products/1`} className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.freeimages.com/clg/images/32/324144/water-drops-on-grey-background_f.jpg"
                alt=""
              />
              <button>
                <Link to={`/products/1`} className="link">
                  Sale
                </Link>
              </button>
            </div>
          </div>{" "}
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.freeimages.com/clg/images/32/324144/water-drops-on-grey-background_f.jpg"
                alt=""
              />
              <button>
                <Link to={`/products/1`} className="link">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.freeimages.com/clg/images/32/324144/water-drops-on-grey-background_f.jpg"
            alt=""
          />
          <button>
            <Link to={`/products/1`} className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
