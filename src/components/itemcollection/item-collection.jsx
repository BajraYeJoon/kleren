import React from "react";
import { withRouter } from "react-router";

import "./item-collection.scss";

const ItemCollection = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} item__collections`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(ItemCollection);
