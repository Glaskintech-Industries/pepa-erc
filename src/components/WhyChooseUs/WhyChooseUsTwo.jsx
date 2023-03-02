import React from "react";
import icon01 from "../../assets/img/icon/h2_choose_icon01.svg";
import icon02 from "../../assets/img/icon/h2_choose_icon02.svg";
import icon03 from "../../assets/img/icon/h2_choose_icon03.svg";
import icon04 from "../../assets/img/icon/h2_choose_icon04.svg";
import WhyChooseUsTwoItem from "./WhyChooseUsTwoItem";

const WhyChooseUsTwo = () => {
  const items = [
    {
      src: icon01,
      title: "Safely connect your wallet",
      desc: "Connect your wallet safe and securely to our dApp. Metamask & Wallet Connect supported.",
      url: "",
    },
    {
      src: icon02,
      title: "Community Driven DAO",
      desc: "Together we can build a better future for our community and make money together.",
      url: "",
    },
    {
      src: icon03,
      title: "Evolving Use Cases",
      desc: "Pepa Token will constantly have new utility & use cases in development.",
      url: "",
    },
    {
      src: icon04,
      title: "Renounced and Liquidity burnt",
      desc: "Sleep on your bags - Rest assured that your funds are safe.",
      url: "",
    },
  ];

  return (
    <section className="choose-area-two choose-bg pb-130">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">why Choose us</span>
              <h2 className="title">Why would you choose Pepa Token</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((x, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <WhyChooseUsTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsTwo;
