import React from "react";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="main__homepage">
      <div className="directory__menu">
        <div className="item__collections">
          <div className="item_content">
            <h1 className="title"> HATS</h1>
            <span className="subtitle"> Order NOW</span>
          </div>
        </div>

        <div className="item__collections">
          <div className="item_content">
            <h1 className="title"> JACKETS</h1>
            <span className="subtitle"> Order NOW</span>
          </div>
        </div>

        <div className="item__collections">
          <div className="item_content">
            <h1 className="title"> SHOES</h1>
            <span className="subtitle"> Order NOW</span>
          </div>
        </div>

        <div className="item__collections">
          <div className="item_content">
            <h1 className="title"> WOMENS</h1>
            <span className="subtitle"> Order NOW</span>
          </div>
        </div>

        <div className="item__collections">
          <div className="item_content">
            <h1 className="title"> MENS</h1>
            <span className="subtitle"> Order NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
