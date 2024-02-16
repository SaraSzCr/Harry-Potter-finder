import { useState, useEffect } from "react";
import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import ls from "../services/localStorage";

import { fetchCharacters } from "../services/fetch";

function App() {
  const [characters, setCharacters] = useState([]);

  //ls.get ("project", [])

  useEffect(() => {
    fetchCharacters().then((responseData) => {
      setCharacters(responseData);
      ls.set ("characters", responseData);
    });
  }, []);

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
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
