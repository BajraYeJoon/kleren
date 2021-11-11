import React from "react";
import ShopCollection from "../shop-collection-item/ShopCollection";
import "./Preview.styles.scss";

const Preview = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, index) => index < 4)
        .map(({ id, ...itemProps }) => (
          <ShopCollection key={id} {...itemProps} />
        ))}
    </div>
  </div>
);
export default Preview;
