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
  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      setChars(res.data.results);
      console.log(res.data.results);
      setSearchTerm("");
    });
  }, []);

  return (
    <section className="character-list">
      <Title>Character List</Title>
      <SearchForm setSearchTerm={setSearchTerm} />
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
