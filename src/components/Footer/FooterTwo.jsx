import { Link } from "react-router-dom";
import React from "react";
import { scrollToTop } from "../../lib/helpers";

const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="container custom-container-four">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-8">
                <div className="footer-menu-two">
                  <ul className="navigation">
                    <li>
                      <Link to="#about">About us</Link>
                    </li>
                    <li>
                      <Link to="#roadmap">Roadmap</Link>
                    </li>
                    <li>
                      <Link to="#faq">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="https://twitter.com/PepaErc" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/PepaErc">
                        <i className="fab fa-telegram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-5">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023. All Rights Reserved Pepa ERC</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="scroll-up text-center">
                  <button
                    className="scroll-to-target"
                    data-target="html"
                    onClick={scrollToTop}
                  >
                    <i className="fas fa-arrow-up"></i>
                  </button>
                  <span>scroll Top</span>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="footer-bottom-menu">
                  <ul>
                    <li>
                      Email us @ <Link to="mailto:marketing@pepaerc.io">marketing@pepaerc.io</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
