import React from "react";

import Spinner from "./Spinner.gif";

import "./Loading.css";

const Loading = () => {
  return (
    <div className="Loading">
      <img src={Spinner} alt="Loading..." />
    </div>
  );
};

export default Loading;
