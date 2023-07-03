import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./cardItem.css";

function CardItem(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <LayoutGroup>
      {expanded ? <ExpandedCard /> : <CompactCard params={props} />}
    </LayoutGroup>
  );
}

const CompactCard = ({ params }) => {
  const Png = params.png;
  return (
    <div
      className="compactCard"
      style={{ background: params.color.backGround, boxShadow: params.color.boxShadow }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
        />
      </div>
      <div className="detail">
        <Png />
        <span>${params.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
};

const ExpandedCard = () => {
  return <div>Expanded Card</div>;
};

export default CardItem;
