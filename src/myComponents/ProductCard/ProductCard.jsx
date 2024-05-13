import "../ProductCard/ProductCard.css";
// import productimage from "../ProductCard/assets/proimg.png";
import React from "react";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="pro-card-img">
        <img src={props.productimage} alt="Card" />
      </div>

      <div className="pro-card-text">
        <p>
          {props.productdescription}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;