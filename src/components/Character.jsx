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
          if(e.target.alt === "Rick Sanchez" && characterItem === "portal-gun.svg"){
            const animationItem = document.getElementById("PortalGun");
            animationSlot.appendChild(animationItem);
            createAnimation("Portal Gun Animation");
          
          }
          if(e.target.alt === "Rick Sanchez" && characterItem === "flask.svg"){
            const animationItem2 = document.getElementById("Flask");
            animationSlot.appendChild(animationItem2);
            createAnimation("Party animation")
          }
          if(e.target.alt === "Mr. Meeseeks" && characterItem === "meeseeks-box.svg"){
            const animationItem3 = document.getElementById("MeeseeksBox");
            animationSlot.appendChild(animationItem3);
            createAnimation("Meeseeks Animation")
          }
          if(e.target.alt === "Pickle Rick" && characterItem === "pickle.svg"){
            const animationItem4 = document.getElementById("Pickle");
            animationSlot.appendChild(animationItem4);
            createAnimation("Pickle Rick Animation")
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
