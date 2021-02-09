import React from "react";
import Photo from "./Photo";

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
