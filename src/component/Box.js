import React from "react";

const Box = (props) => {
  let result;

  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
    if (!props.result) result = "";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      {props.item && (
        <div className="imgContainer">
          <img className="item-img" src={props.item.img} />
        </div>
      )}
      <h1>{result}</h1>
    </div>
  );
};

export default Box;
