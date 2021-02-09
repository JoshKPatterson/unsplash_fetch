import React from "react";
import Photo from "./Photo";

const Display = (props) => {
  return (
    <div className="display">
      <p>{props.input ? props.input : null}</p>
      {props.result
        ? props.result.data.results.map((item) => {
            return <Photo link={item.links.html} />;
          })
        : null}
      {/* {props.result ? props.result.data.results.map(item => {
        <p>{item.links.html}</p>
      }) : null} */}
      {/* {props.result ? props.result.data.results[0].links.html : null} */}
    </div>
  );
};

export default Display;
