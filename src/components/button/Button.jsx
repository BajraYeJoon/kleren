import React from "react";
import "./button.scss";

const Button = ({ children, isGoogleSignIn, ...buttonProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
    {...buttonProps}
  >
    {" "}
    {children}{" "}
  </button>
);

export default Button;
