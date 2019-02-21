import React from "react";

const Intro = props => {
  return (
    <div className="container">
      <h2 className="app-intro">{props.message}</h2>
    </div>
  );
};

export default Intro;
