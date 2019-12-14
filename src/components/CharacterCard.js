import React from "react";
import styled from "styled-components";

export default function CharacterCard({ item }) {
  const Card = styled.div`
    width: 30%;
    background: white;
    margin: 10px 0;
    text-align: center;
    border-radius: 20px;
  `;
  const Thumbnail = styled.img`
    width: 100%;
  `;
  return (
    <Card>
      <h1>{item.name}</h1>
      <Thumbnail src={item.image} />
      <div>
        <p>Species: {item.species}</p>
        <p>Gender: {item.gender}</p>
        <p>Id: {item.id}</p>
        <p>Status: {item.status}</p>
      </div>
    </Card>
  );
}
