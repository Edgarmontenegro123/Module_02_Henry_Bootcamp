import React, { useState } from "react";
import './Nav.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <nav class="navbar navbar-light bg-light">
      <img id = "logoHenry" src = 'https://hypernoir.com/wp-content/uploads/2020/11/Henry.png' />
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input class="form-control mr-sm-2" type="submit" value="Buscar" />
      </form>
    </nav>
  );
}
