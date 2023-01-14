import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { img, img2, title, isNew, oldPrice, price, id } = item;

  return (
    <Link to={`/product/${id}`}>
      <div className="card">
        <div className="image">
          {isNew && <span>New Season</span>}
          <img src={img} alt="" className="mainImg" />
          <img src={img2} alt="" className="secondImg" />
        </div>
        <h2>{title}</h2>
        <div className="price">
          <h3>${oldPrice}</h3>
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
