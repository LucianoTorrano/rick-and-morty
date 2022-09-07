import React from "react";
import "./AnimationTools.css";
import PortalGun from "../assets/img/portal-gun.svg";
import MeeseeksBox from "../assets/img/meeseeks-box.svg";
import Pickle from "../assets/img/pickle.svg";
import Flask from "../assets/img/flask.svg";

function AnimationTools() {
  const animations = [
    {
      id: 0,
      imgSrc: PortalGun,
      imgAlt: "PortalGun",
    },
    {
      id: 1,
      imgSrc: MeeseeksBox,
      imgAlt: "MeeseeksBox",
    },
    {
      id: 2,
      imgSrc: Pickle,
      imgAlt: "Pickle",
    },
    {
      id: 3,
      imgSrc: Flask,
      imgAlt: "Flask",
    },
  ];

  return (
    <div className="tools-container">
      <h3 className="tools-title">Animation Tools</h3>
      <ul className="tools-list">
        {animations.map((animationItem, index) => {
          return (
            <li
              className="tools-list_item"
              id={animationItem.imgAlt}
              key={index}        
              onDrag = { e => {
                e.dataTransfer.setData('text', e.target.id)
              }}
            >
              <img src={animationItem.imgSrc} alt={animationItem.imgAlt} />
            </li>
          );
        })}
      </ul>
      <div className="stop-animation-button">Stop Animation</div>
    </div>
  );
}

export default AnimationTools;
