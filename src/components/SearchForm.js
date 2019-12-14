import React, { useState } from "react";
import styled from "styled-components";
// import Form from "react-router-dom";

export default function SearchForm({ setSearchTerm }) {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const Sect = styled.section`
    width: 60%;
    display: flex;
  `;
  const Label = styled.label`
    font-size: 2rem;
  `;
  const Form = styled.label`
    padding-left: 20px;
  `;
  const Input = styled.input`
    height: 20px;
    margin-bottom: 3px;
  `;
  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search:</label>
        <input
          name="search"
          type="text"
          placeholder="Search characters..."
          onChange={handleChange}
        ></input>
      </form>
    </section>
  );
}
