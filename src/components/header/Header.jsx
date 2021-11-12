import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/Capture.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-top">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>

        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
