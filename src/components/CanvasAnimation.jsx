import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PortalImg from "../assets/img/portal-img.png";
import MeeseeksImg from "../assets/img/meeseeks.png";
import MeeseeksSpriteImg from "../assets/img/meeseeks-sprite.svg";
import PortalSound from '../assets/sound/portal-animation.mp3'
import MeeseeksSound from '../assets/sound/mr-meeseeks.mp3'
import "./CanvasAnimation.css";

function CanvasAnimation() {
  const { animation } = useContext(AppContext);
  return (
    <>
      <div className={animation === "Portal Gun Animation" ? "portalGunAnimation display-block" : "display-none" }>
        <canvas id="portalGunCanvas" className="animation-canvas"></canvas>
        <img
          src={PortalImg}
          alt="Rick and Morty traveling"
          className="portal"
          onDragStart={(e) => e.preventDefault()}
        />
        <audio src={PortalSound} className="portalSound" id="portalSound"></audio>
      </div>
      <div id="meeseeksAnimation" className={animation === "Meeseeks Animation" ? "meeseeksAnimation display-block" : "display-none" }>
        <canvas id="meeseeksCanvas" className="animation-canvas"></canvas>
        <img src={MeeseeksSpriteImg} alt="Meeseeks Boom animation" id="meeseeksSprite"/>
        <img
          src={MeeseeksImg}
          alt="Mr Meeseeks"
          className="meeseeks"
          onDragStart={(e) => e.preventDefault()}
        />
        <audio src={MeeseeksSound} className="meeseksSound" id="meeseeksSound"></audio>
      </div>
      
    </>
  );
}

export default CanvasAnimation;
