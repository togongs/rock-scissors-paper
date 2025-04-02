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
      <div className="imgContainer">
        <img
          className="item-img"
          src={
            props.item
              ? props.item.img
              : "https://cdn.pixabay.com/photo/2017/02/13/01/26/the-question-mark-2061539_1280.png"
          }
        />
      </div>
      <h1 style={{ height: 50, textAlign: "center" }}>{result}</h1>
    </div>
  );
};

export default Box;
