import React, { Component } from "react";
import Preview from "../../components/preview-collections/Preview.jsx";

import SHOP_DATA from "./shopdata.jsx";
class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => (
          <Preview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
