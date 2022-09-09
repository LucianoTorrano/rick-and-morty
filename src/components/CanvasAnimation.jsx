import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PortalImg from "../assets/img/portal-img.png";
import MeeseeksImg from "../assets/img/meeseeks.png";
import RickImg from "../assets/img/rick.png";
import PickleImg from "../assets/img/pickle.png";
import MeeseeksSpriteImg from "../assets/img/meeseeks-sprite.svg";
import PortalSound from "../assets/sound/portal-animation.mp3";
import MeeseeksSound from "../assets/sound/mr-meeseeks.mp3";
import RickPartySound from "../assets/sound/rick-party.mp3";
import PickleRickSound from "../assets/sound/pickle-rick.mp3";
import "./CanvasAnimation.css";

function CanvasAnimation() {
  const { animation } = useContext(AppContext);
  return (
    <>
      <div
        className={
          animation === "Portal Gun Animation"
            ? "portalGunAnimation display-block"
            : "display-none"
        }
      >
        <canvas id="portalGunCanvas" className="animation-canvas"></canvas>
        <img
          src={PortalImg}
          alt="Rick and Morty traveling"
          className="portal"
          onDragStart={(e) => e.preventDefault()}
        />
        <audio
          src={PortalSound}
          className="portalSound"
          id="portalSound"
        ></audio>
      </div>
      <div
        id="meeseeksAnimation"
        className={
          animation === "Meeseeks Animation"
            ? "meeseeksAnimation display-block"
            : "display-none"
        }
      >
        <canvas id="meeseeksCanvas" className="animation-canvas"></canvas>
        <img
          src={MeeseeksSpriteImg}
          alt="Meeseeks Boom animation"
          id="meeseeksSprite"
        />
        <img
          src={MeeseeksImg}
          alt="Mr Meeseeks"
          className="meeseeks"
          onDragStart={(e) => e.preventDefault()}
        />
        <audio
          src={MeeseeksSound}
          className="meeseksSound"
          id="meeseeksSound"
        ></audio>
      </div>
      <div
        id="partyAnimation"
        className={
          animation === "Party Animation"
            ? "partyAnimation display-flex"
            : "display-none"
        }
      >
        <img
          src={RickImg}
          id="rick"
          alt="Rick drunk"
          onDragStart={(e) => e.preventDefault()}
        />
        <div className="lights-container">
          <div className="circle blue lightOne" />
          <div className="circle green lightTwo" />
          <div className="circle blue lightThree" />
          <div className="circle green lightFour" />
        </div>
        <div className="lights-container">
          <div className="circle green lightThree" />
          <div className="circle blue lightOne" />
          <div className="circle green lightFour" />
          <div className="circle blue lightTwo" />
        </div>
        <div className="lights-container">
          <div className="circle blue lightOne" />
          <div className="circle green lightTwo" />
          <div className="circle blue lightFour" />
          <div className="circle green lightThree" />
        </div>
        <div className="lights-container">
          <div className="circle green lightTwo" />
          <div className="circle blue lightFour" />
          <div className="circle green lightOne" />
          <div className="circle blue lightThree" />
        </div>
        <audio
          src={RickPartySound}
          className="rickSound"
          id="rickSound"
        ></audio>
      </div>
      <div
        id="pickleAnimation"
        className={
          animation === "Pickle Rick Animation"
            ? "pickleAnimation display-block"
            : "pickleAnimation display-none"
        }
      >
        <canvas id="pickleCanvas" className="animation-canvas pickleRickCanvas"></canvas>
        <img
          src={PickleImg}
          alt="Pickle Rick"
          className="pickleImg"
          id="pickleImg"
          onDragStart={(e) => e.preventDefault()}
        />
        <audio
          src={PickleRickSound}
          className="pickleSound"
          id="pickleSound"
        ></audio>
      </div>
    </>
  );
}

export default CanvasAnimation;
