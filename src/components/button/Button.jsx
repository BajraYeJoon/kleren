import React from "react";
import "./button.scss";

const Button = ({ children, ...buttonProps }) => (
  <button className="button" {...buttonProps}>
    {" "}
    {children}{" "}
  </button>
);

export default Button;
