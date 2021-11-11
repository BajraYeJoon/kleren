import React from "react";
import "./ShopCollection.scss";

const ShopCollection = ({ id, name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="foo-collection">
      <span className="name">{name}</span>
      <span className="price">
        {" "}
        <span>$</span>
        {price}
      </span>
    </div>
  </div>
);
export default ShopCollection;
