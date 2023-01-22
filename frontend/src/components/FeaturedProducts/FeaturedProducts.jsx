import "./FeaturedProducts.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch.js";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

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
        {error
          ? "Something went wrong"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
