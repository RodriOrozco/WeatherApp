import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        className="form-control"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input className="form-btn" type="submit" value="Agregar" />
    </form>
  );
}
