import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { img, img2, title, isNew, oldPrice, price, id } = item?.attributes;

  console.log("item", item.attributes);
  const IMG = img.data.attributes?.url;
  const IMG2 = img2.data.attributes?.url;
  const TOKEN = import.meta.env.VITE_API_UPLOAD_URL;
  return (
    <Link to={`/product/${id}`}>
      <div className="card">
        <div className="image">
          {isNew && <span>New Season</span>}
          <img src={TOKEN + IMG} alt="" className="mainImg" />
          <img src={TOKEN + IMG2} alt="" className="secondImg" />
        </div>
        <h2>{title}</h2>
        <div className="price">
          <h3>${oldPrice || price + 20}</h3>
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
