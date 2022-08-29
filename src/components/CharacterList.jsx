import React from "react";
import { useEffect, useState } from "react";
import Character from './Character'
import './CharacterList.css'

function CharacterList() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacter(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="character-list">
      {characters.map((character) => {
        return (
            <Character character={character} key={character.id} />
        );
      })}
    </div>
  );
}

export default CharacterList;
