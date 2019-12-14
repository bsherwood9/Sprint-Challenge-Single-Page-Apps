import React from "react";
import Header from "./components/Header.js";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharactersList from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Route exact path="/" render={renderProps => <WelcomePage />} />
      <Route path="/characters" render={renderProps => <CharactersList />} />
    </main>
  );
}
