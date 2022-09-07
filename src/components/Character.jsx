import React from "react";
import "./Character.css";


function Character({ character, id }) {
  return (
    <div className={character.species === "Alien" ? "character-card green-bg" : "character-card blue-bg"} id={id}>
      <img
        className="character-img"
        src={character.image}
        alt={character.name}
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
          e.target.classList.remove('hover-img');
          if(e.target.alt === "Rick Sanchez" && characterItem === "portal-gun.svg"){
            console.log("Portal Gun animation");
          }
          if(e.target.alt === "Rick Sanchez" && characterItem === "flask.svg"){
            console.log("Party animation");
          }
          if(e.target.alt === "Mr. Meeseeks" && characterItem === "meeseeks-box.svg"){
            console.log("Meeseeks Animation");
          }
          if(e.target.alt === "Pickle Rick" && characterItem === "pickle.svg"){
            console.log("Pickle Rick Animation");
          }
        }}
      />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <ul className="animation-slots" id="animation-slots"></ul>
        <div className="gender-specie-container">
          <p className="gender"><span>Gender:</span> {character.gender}</p>
          <p className="specie"><span>Specie:</span> {character.species}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
