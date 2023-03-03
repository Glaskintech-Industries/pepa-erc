import React from "react";
import icon from "../../assets/img/icon/scroll_icon.svg";
import bannerImg from "../../assets/img/banner/banner_img.png";
import { Link } from "react-router-dom";
import { handleClickScroll } from "../../lib/helpers";

const BannerTwo = () => {
  return (
    <section className="banner-area-two">
      <div className="banner-bg-two"></div>
      <div className="banner-text">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="banner-content text-center">
              <h4 className="subtitle wow fadeInDown" data-wow-delay=".2s">
                MORE THAN JUST A MEME
              </h4>
              <h4 className="title wow fadeInDown" data-wow-delay=".2s">
                A TRIBUTE TO PEPE'S WIFE
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-social-wrap">
        <ul>
          <li>
            <a href="https://twitter.com/PepaErc" target="_blank" rel="noreferrer" className="banner-social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <span>Twitter</span>
          </li>
          <li>
            <a href="https://t.me/PepaErc" target="_blank" rel="noreferrer" className="banner-social-link">
              <i className="fab fa-telegram"></i>
            </a>
            <span>Telegram</span>
          </li>
          <li>
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x6b316f568e67306791b642afa6e0674ec7853bac" target="_blank" rel="noreferrer" className="banner-social-link">
            <i className="fas fa-chart-bar"></i>
            </a>
            <span>Dextools</span>
          </li>
        </ul>
      </div>
      <div className="banner-scroll">
        <span>Scroll down</span>
        <Link
          to="#about"
          data-target="#about"
          onClick={() => handleClickScroll("about")}
        >
          <img src={icon} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default BannerTwo;
