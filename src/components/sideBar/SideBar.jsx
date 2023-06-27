import React from "react";
import SideBarMenu from "./sideBarMenu/SideBarMenu";
import "./SideBar.css";
import logo from "../../assets/images/logo.png";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <SideBarMenu />
    </div>
  );
}

export default SideBar;
