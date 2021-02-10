// Import React
import React from "react";

// Import Components
import Photo from "./Photo";

// Import Style
import "./Display.scss";

// Display Component
const Display = (props) => {
  return (
    <div className="display">
      {props.result
        ? props.result.data.results.map((item) => {
            return <Photo link={item.urls.regular} />;
          })
        : null}
    </div>
  );
};

export default Display;
