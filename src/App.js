import React from "react";
import Header from "./components/Header.js";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharactersList from "./components/CharacterList";
import styled from "styled-components";

export default function App() {
  const Nav = styled.nav`
    width: 85vw;
    max-width: 1024px;
    margin: 0 auto;
    font-size: 2rem;
  `;
  return (
    <div>
      <section className="main2">
        <Header />
      </section>
      <Nav>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/characters">
          Characters
        </Link>
      </Nav>
      <main>
        <Route exact path="/" render={renderProps => <WelcomePage />} />
        <Route path="/characters" render={renderProps => <CharactersList />} />
      </main>
    </div>
  );
}
