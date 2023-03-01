import React from "react";
import shape01 from "../../assets/img/images/faq_shape01.png";
import shape02 from "../../assets/img/images/faq_shape02.png";
import shape03 from "../../assets/img/images/faq_shape03.png";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faq_items = [
    {
      id: "headingOne",
      controls: "collapseOne",
      expanded: true,
      btnClass: "",
      contentClass: "show",
      title: "Is there any tax on buys and sells?",
      details: `Pepa is a ZERO percent tax ERC20 token on the ethereum network. Since the tokens ownership has been renounced, there is no way to change the tax rate.`,
    },
    {
      id: "headingTwo",
      controls: "collapseTwo",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Is the liquidity locked and how long for?",
      details: `There is no need for a lock since the LP for Pepa token has been burnt. The burn can be found here: https://etherscan.io/tx/0x95903e781980e1b600c738f790a8d2d0d213a58cad98d421787d724a2d9f6490`,
    },
    {
      id: "headingThree",
      controls: "collapseThree",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Whats the recommended slippage?",
      details: `Due to the 0% tax, the recommended slippage is between 0.1% - 0.5%. This is to ensure that the transaction goes through but to try avoid the frontrunning MEV bots.`,
    },
    {
      id: "headingFour",
      controls: "collapseFour",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "How does the 30-day free software trial work?",
      details: `LessAccounting is 100% web-based, meaning it can be
      accessed from anywhere and there’s no software to
      install on your computer. You can easily use
      LessAccounting on your iPhone or any Android mobile
      device with our cloud accounting. That is what makes it
      the best small business accounting software options
      among accounting programs.`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "How does the 30-day free software trial work?",
      details: `LessAccounting is 100% web-based, meaning it can be
      accessed from anywhere and there’s no software to
      install on your computer. You can easily use
      LessAccounting on your iPhone or any Android mobile
      device with our cloud accounting. That is what makes it
      the best small business accounting software options
      among accounting programs.`,
    },
  ];

  return (
    <section id="faq" className="faq-area">
      <div className="container custom-container-four">
        <div className="faq-shape-wrap">
          <img src={shape01} alt="" className="img-one" />
          <img src={shape02} alt="" className="img-two rotateme" />
          <img src={shape03} alt="" className="img-three" />
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="section-title section-title-two text-center mb-60">
              <h2 className="title">Frequently asked questions</h2>
            </div>

            <div className="faq-wrap wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion" id="accordionExample">
                {faq_items.map((x, index) => (
                  <FaqItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
