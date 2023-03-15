import React, { useState, useEffect } from "react";
import { useModal } from "../../utils/ModalContext";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import logoImage from "../../../src/assets/img/logo/logo.png";
import $ from "jquery";
import { useMoralis } from "react-moralis";

const Header = () => {
  const { walletModalHandle } = useModal();
  const { isAuthenticated, logout } = useMoralis();
  // sticky nav bar
  const [stickyClass] = useState({
    fixed: "",
    header: "",
  });


  // mobile menu
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
  }, []);

  // scroll to element by id
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // active link switching
  const { hash } = useLocation();
  const isActiveLink = (id) => {
    return id === hash ? "active" : "";
  };

  const handleWalletBtn = (e) => {
    e.preventDefault();
    walletModalHandle()
  }

  return (
    <header id="header">
      <div
        id="sticky-header"
        className={cn(
          "menu-area menu-style-two transparent-header",
          stickyClass.header
        )}
      >
        <div className="container custom-container-three">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars"></i>
              </div>

              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link to="/">
                      <img src={logoImage} alt="" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li
                        className={cn(
                          hash === "" && "active",
                          " menu-item-has-children"
                        )}
                      >
                        <Link
                          to="#header"
                          className="section-link"
                          onClick={() => handleClickScroll("header")}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={cn(hash === "#about" && "active")}>
                        <Link
                          to="#about"
                          className="section-link"
                          onClick={() => handleClickScroll("about")}
                        >
                          About us
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          to="#roadmap"
                          className="section-link"
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          Roadmap
                        </Link>
                      </li>
                      <li className={isActiveLink("#faq")}>
                        <Link
                          to="#faq"
                          className="section-link"
                          onClick={() => handleClickScroll("faq")}
                        >
                          Faq
                        </Link>
                      </li>
                      <li className={isActiveLink("#contact")}>
                        <Link
                          to="#contact"
                          className="section-link"
                          onClick={() => handleClickScroll("contact")}
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-md-block">
                    <ul>
                      <li className="header-btn">
                      {!isAuthenticated ? <button
                        className="btn"
                        onClick={e => handleWalletBtn(e)}
                      >
                        <i className="fas fa-wallet"></i> {' '} Connect
                      </button> : <button
                        className="btn"
                        onClick={e => { logout()}}
                      >
                        <i className="fas fa-wallet"></i> {' '} Logout
                      </button>}
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="nav-logo">
                    <Link to="/">
                      <img src={logoImage} alt="" title="" />
                    </Link>
                  </div>
                  <div className="menu-outer">
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
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
                </nav>
              </div>
              <div className="menu-backdrop"></div>
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
