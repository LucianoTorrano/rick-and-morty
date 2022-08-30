import React from "react";
import LightningImg from '../assets/img/lightning-sprite2.svg'
import './LightningAnimation.css'

function LightningAnimation() {
  return (
    <div>
      <img src={LightningImg} id="lightningImg" />
      <canvas id="lightningAnimation"></canvas>
    </div>
  );
}

export default LightningAnimation;
