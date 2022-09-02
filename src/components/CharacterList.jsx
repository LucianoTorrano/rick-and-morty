import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character";
import "./CharacterList.css";
import PageBtnDisplay from './PageBtnDisplay'

function CharacterList() {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacter(data.results);
    }
    fetchData();
  }, [ page ]);

  return (
    <>
      <PageBtnDisplay page={page} setPage={setPage} />
      <div className="character-list">
        {characters.map((character) => {
          return <Character character={character} key={character.id} />;
        })}
      </div>
      <PageBtnDisplay page={page} setPage={setPage} />
    </>
  );
}

export default CharacterList;
