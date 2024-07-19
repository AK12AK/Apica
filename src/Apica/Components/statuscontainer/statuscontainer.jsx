import React, { useState, useEffect } from "react";
import "./statuscontainer.scss";

const statuscontainer = (props) => {
  //   useEffect(() => {
  //     console.log(props);
  //   }, [props]);

  return (
    <div className={`statuscontainer ${props.message.background === "blue" ? "blue" : ""}`}>
      <div className="img-week">
        <img src={props.message.image} alt="Graph Icon" />
        <select>
          <option value="This Week">This Week</option>
        </select>
      </div>
      <div className="details">
        {props.message.name_price.map((item, index) => (
          <div key={index} className="text-num">
            <p className={`text ${item.color}`}>{item.text}</p>
            <div className="num-perc">
              <p className="number">{item.num}</p>
              <p className={`percentage ${item.loss}`}>{item.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default statuscontainer;
