import React from "react";
import aboutImg from "../../assets/img/images/h2_about_img.png";
import shape01 from "../../assets/img/images/about_shape01.png";
import shape02 from "../../assets/img/images/about_shape02.png";

const About = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">ABOUT PEPA ERC</span>
                <h2 className="title">
                  Meet Pepa, the wife of the infamous Pepe the frog.
                </h2>
              </div>
              <p>
                2023 is the year of Pepa. Out with the dog tokens, and in with the frog tokens. Pepa token is a community driven meme token with a focus on providing utility to holders.
              </p>
              <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>0% buy and sell tax
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Liquidity burnt forever
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Renounced
                  </li>
                </ul>
              </div>

              <a
                href={'/downloads/PepaPaperV1.pdf'}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-two"
              >
                Download Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img src={shape01} alt="" className="shape-one" />
        <img src={shape02} alt="" className="shape-two rotateme" />
      </div>
    </section>
  );
};

export default About;
