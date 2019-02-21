import React from "react";
import LoaderSrc from "../Loader/lg.dual-ring-loader.gif";

const Loader = () => {
  return (
    <div>
      <img
        src={LoaderSrc}
        alt="Loader"
        style={{ width: 100, margin: "0 auto", display: "block" }}
      />
    </div>
  );
};

export default Loader;
