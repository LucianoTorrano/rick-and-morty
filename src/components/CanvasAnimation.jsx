import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PortalImg from "../assets/img/portal-img.png";
import PortalSound from '../assets/sound/portal-animation.mp3'
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
    </>
  );
}

export default CanvasAnimation;
