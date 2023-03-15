import React, { useEffect, useState } from "react";
import icon from "../../assets/img/icon/counter_icon01.svg";
import { useMoralisDapp } from "../../../src/utils/MoralisDappProvider/MoralisDappProvider";
import CounterAreaItem from "./CounterAreaItem";

const CounterArea = () => {
  const { tokenPrice } = useMoralisDapp();

  return (
    <section className="counter-area">
      <div className="container custom-container-four">
        <div className="counter-inner">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <CounterAreaItem
                icon={icon}
                amount={tokenPrice?.usdPrice || 0}
                title="Price"
                suffix=""
              />
            </div>

            <div className="col-lg-4 col-sm-6">
              <CounterAreaItem
                icon={icon}
                amount={(1000000000000 * tokenPrice?.usdPrice / 1000).toFixed(0) || 0}
                title="Marketcap"
                suffix="K"
              />
            </div>

            <div className="col-lg-4 col-sm-6">
              <CounterAreaItem
                icon={icon}
                amount={0}
                title="TLV"
                suffix="K"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterArea;
