import React from "react";
import Image from "./Vector.svg";
import "./Logo.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={Image} alt="Loading..." />
      </NavLink>
    </div>
  );
};

export default Logo;
