import { useState, useEffect } from "react";
import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";

import { fetchCharacters } from "../services/fetch";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then((responseData) => {
      setCharacters(responseData);
    });
  }, []);

  return (
    <div>
      <header className="title">
        <h1>Harry Potter</h1>
      </header>
      <main className="main">
        <Filters />
        <CharacterList characters={characters}/>
      </main>
      <footer className="footer">
        <span>@copy; Adalabers 2024</span>
      </footer>
    </div>
  );
}

export default App;
