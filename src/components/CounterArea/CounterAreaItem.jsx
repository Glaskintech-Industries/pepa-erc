import React from "react";
import Odometer from "react-odometerjs";

const CounterAreaItem = (props) => {
  return (
    <div className="counter-item">
      <div className="counter-icon">
        <img src={props.icon} alt="" />
      </div>

      <div className="counter-content">
        <h2 className="count">
          {/* <span className="odometer" data-count="280"></span> */}
          $<Odometer
            value={props.amount}
            format="(,ddd).ddddddddd"
            duration={1000}
            animation={"count"}
          />
          {props.suffix}
        </h2>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default CounterAreaItem;
