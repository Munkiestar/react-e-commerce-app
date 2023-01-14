import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2 className="title">Categories</h2>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
          </ul>
        </div>{" "}
        <div className="item">
          <h2 className="title">Links</h2>
          <ul>
            <li>FAQ</li>
            <li>Pages</li>
            <li>Stores</li>
            <li>Comaper</li>
            <li>Cookies</li>
          </ul>
        </div>{" "}
        <div className="item">
          <h2 className="title">About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            culpa debitis natus nemo nobis quaerat similique veritatis? Adipisci
            illum ipsum magnam modi sit temporibus voluptatibus! Asperiores
            deleniti dolores ducimus placeat!
          </p>
        </div>{" "}
        <div className="item">
          <h2 className="title">Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            culpa debitis natus nemo nobis quaerat similique veritatis? Adipisci
            illum ipsum magnam modi sit temporibus voluptatibus! Asperiores
            deleniti dolores ducimus placeat!
          </p>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Oharastore</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
