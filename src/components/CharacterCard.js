import React from "react";

export default function CharacterCard({ item }) {
  return (
    <div>
      <h1>Name: {item.name}</h1>
      <img src={item.image} />
      <p>Species: {item.species}</p>
      <p>Gender: {item.gender}</p>
      <p>Id: {item.id}</p>
      <p>Status: {item.status}</p>
    </div>
  );
}
