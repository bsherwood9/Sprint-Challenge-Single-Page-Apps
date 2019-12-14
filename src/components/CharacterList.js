import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
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
      <h2>Character List</h2>
      <SearchForm setSearchTerm={setSearchTerm} />
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
    </section>
  );
}
