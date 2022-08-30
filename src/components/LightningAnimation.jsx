import React from "react";
import LightningImg from '../assets/img/lightning-sprite.svg'
import LightningSound from '../assets/sound/laser-lightning.wav'
import './LightningAnimation.css'

function LightningAnimation() {
  return (
    <div>
      <img src={LightningImg} id="lightningImg" />
      <audio src={LightningSound} id='lightningSound'></audio>
      <canvas id="lightningAnimation"></canvas>
    </div>
  );
}

export default LightningAnimation;
