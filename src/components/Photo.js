// Import React
import React from "react";

// Import Style
import "./Photo.scss";

// Photo Component
const Photo = (props) => {
  return (
    <div className="photo">
      <img src={props.link} />
    </div>
  );
};

export default Photo;
