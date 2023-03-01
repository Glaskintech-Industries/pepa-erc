import React from "react";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";
import Header from "../components/Header/Header";
import FooterTwo from "../components/Footer/FooterTwo";

const Layout = (props) => {
  return (
    <div className={cn("white-background")}>
      <PageLoader />

      <Header />

      {props.children}

      <FooterTwo />
    </div>
  );
};

export default Layout;
