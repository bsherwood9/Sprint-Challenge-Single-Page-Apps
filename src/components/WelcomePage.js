import React from "react";
import image from "../assets/rickandmorty.png";
import styled from "styled-components";

export default function WelcomePage() {
  const Image = styled.img`
    max-width: 100%;
  `;
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image className="main-img" src={image} alt="rick" />
      </header>
    </section>
  );
}
