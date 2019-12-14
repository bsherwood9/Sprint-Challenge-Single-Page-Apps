import React, { useState } from "react";
// import Form from "react-router-dom";

export default function SearchForm({ setSearchTerm }) {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
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
