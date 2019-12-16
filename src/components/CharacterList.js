import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function CharacterList() {
  const CharacterGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-item: space-around;
  `;

  const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
  `;

  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [loc, setLoc] = useState("");
  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  useEffect(() => {
    axios
      .get(currentPage)
      .then(res => {
        setChars(res.data.results);
        setLoc(res.data.info);
        console.log(res);
        setSearchTerm("");
      })
      .catch(error => console.log("Error is:", error));
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(loc.next);
  };
  const prevPage = () => {
    setCurrentPage(loc.prev);
  };
  return (
    <section className="character-list">
      <Title>Character List</Title>
      <SearchForm setSearchTerm={setSearchTerm} />
      <div>
        {loc.prev !== "" ? <button onClick={prevPage}>Prev</button> : <></>}
        {loc.next !== "" ? <button onClick={nextPage}>Next</button> : <></>}
      </div>

      <CharacterGrid>
        {chars
          .filter(item => {
            return (
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.gender.includes(searchTerm) ||
              item.status.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .map(item => {
            return <CharacterCard item={item} />;
          })}
      </CharacterGrid>
    </section>
  );
}
