import React from "react";
import "./Character.css";

function Character({ character }) {
  return (
    <div className={character.species === "Alien" ? "character-card green-bg" : "character-card blue-bg"}>
      <img
        className="character-img"
        src={character.image}
        alt={character.name}
      />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <div className="gender-specie-container">
          <p className="gender"><span>Gender:</span> {character.gender}</p>
          <p className="specie"><span>Specie:</span> {character.species}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
