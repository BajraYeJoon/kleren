import React from "react";

import "./item-collection.scss";

const ItemCollection = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} item__collections`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="item_content">
        <h1 className="title"> {title.toUpperCase()}</h1>
        <span className="subtitle"> Order NOW</span>
      </div>
    </div>
  );
};

export default ItemCollection;
