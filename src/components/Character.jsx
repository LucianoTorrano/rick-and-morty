import {useContext} from "react";
import {AppContext} from '../context/AppContext'
import "./Character.css";


function Character({ character, id }) {
  const {animation, createAnimation} = useContext(AppContext);

  return (
    <div className={character.species === "Alien" ? "character-card green-bg" : "character-card blue-bg"}>
      <img
        className="character-img"
        src={character.image}
        alt={character.name}
        onDragStart={e => e.preventDefault()}
        onDragOver = {(e) => {
          e.preventDefault();
          e.target.classList.add('hover-img');
        }}
        onDragLeave={ e => {
          e.target.classList.remove('hover-img');
        }}
        onDrop={(e)=>{
          const characterItemSrc = e.dataTransfer.getData('text').split('/');
          const characterItem = characterItemSrc[characterItemSrc.length - 1];
          const animationSlot = document.getElementById(`${character.name.split(' ').join('')}`);

          e.target.classList.remove('hover-img');
          if(e.target.alt === "Rick Sanchez" && characterItem === "portal-gun.c22a5c12.svg"){
            const animationItem = document.getElementById("PortalGun");
            const portalSound = document.getElementById("portalSound");
            animationSlot.appendChild(animationItem);
            createAnimation("Portal Gun Animation");
            portalSound.play();
            
          }
          if(e.target.alt === "Rick Sanchez" && characterItem === "flask.8b383611.svg"){
            const animationItem2 = document.getElementById("Flask");
            const rickPartySound = document.getElementById("rickSound")
            animationSlot.appendChild(animationItem2);
            createAnimation("Party Animation");
            rickPartySound.play();
          }
          if(e.target.alt === "Mr. Meeseeks" && characterItem === "meeseeks-box.32914ada.svg"){
            const animationItem3 = document.getElementById("MeeseeksBox");
            const meeseeksSound = document.getElementById('meeseeksSound');
            animationSlot.appendChild(animationItem3);
            createAnimation("Meeseeks Animation")
            meeseeksSound.play();
          }
          if(e.target.alt === "Pickle Rick" && characterItem === "pickle.f30ef588.svg"){
            const animationItem4 = document.getElementById("Pickle");
            const pickleSound = document.getElementById("pickleSound");
            animationSlot.appendChild(animationItem4);
            createAnimation("Pickle Rick Animation");
            pickleSound.play();
          }
        }}
      />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <ul className="animation-slots" id={character.name.split(' ').join('')}></ul>
        <div className="gender-specie-container">
          <p className="gender"><span>Gender:</span> {character.gender}</p>
          <p className="specie"><span>Specie:</span> {character.species}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
