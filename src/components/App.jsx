import { useState, useEffect } from "react";
import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";

import { fetchCharacters } from "../services/fetch";

function App() {
  const [characters, setCharacters] = useState([]);

  const [filterName, setFilterName] = useState("");

  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  const handleFilterByName = (inputValue) => {
    setFilterName(inputValue);

    console.log(inputValue);
  };

  const handleFilterByHouse = (selectValue) => {
    setFilterHouse(selectValue);
    console.log(selectValue);
  };
  const filteredName = characters.filter((character) =>
    character.name.toLowerCase().includes(filterName.toLowerCase())
  );

  useEffect(() => {
    fetchCharacters(filterHouse).then((responseData) => {
      setCharacters(responseData);
    });
  }, [filterHouse]);

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>
      <main className="main">
        <Filters
          handleFilterByName={handleFilterByName}
          filterName={filterName}
          handleFilterByHouse={handleFilterByHouse}
          filterHouse={filterHouse}
        />
        <CharacterList characters={filteredName} />
      </main>
      <footer className="footer">
        <span>@copy; Adalabers 2024</span>
      </footer>
    </div>
  );
}

export default App;
