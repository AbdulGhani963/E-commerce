import React from "react";
import { Header, FooterSection } from "../index";

const Layout = (props) => {

  return (
    <div className={props.className}>
      <Header />
      {props.children}
      <FooterSection />
    </div>
  );
};

export default Layout;
