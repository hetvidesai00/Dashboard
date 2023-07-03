import React from "react";
import { CardsData } from "../../Data/Data";
import CardItem from "../cardItem/cardItem";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      {CardsData.map((item, index) => {
        return (
          <div className="parentContainer">
            <CardItem
              key={index}
              title={item.title}
              color={item.color}
              barValue={item.barValue}
              value = {item.value}
              png={item.png}
              series={item.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
