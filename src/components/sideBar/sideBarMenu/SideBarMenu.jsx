import React, { useState } from "react";
import "./SideBarMenu.css";
import { SideBarData } from "../../../Data/Data";
import { UilSignout } from "@iconscout/react-unicons";

function SideBarMenu() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="menu">
      {SideBarData.map((item, index) => {
        return (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            {/* Writing icon as component because the icon in data is a component which is imported from lib */}
            <span>{item.heading}</span>
          </div>
        );
      })}
      <div className="menuItem">
        <UilSignout />
      </div>
    </div>
  );
}

export default SideBarMenu;
