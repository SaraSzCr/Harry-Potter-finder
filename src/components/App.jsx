import { useState, useEffect } from "react";
import "../scss/App.scss";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import { fetchCharacters } from "../services/fetch";
import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./characters/CharacterDetails";

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

  const findCharacter = (id) => {
    return characters.find((character) => character.id === id);
  };

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterByName={handleFilterByName}
                  filterName={filterName}
                  handleFilterByHouse={handleFilterByHouse}
                  filterHouse={filterHouse}
                />
                <section className="sectionText">
                  {filteredName.length > 0 ? (
                    <CharacterList characters={filteredName} />
                  ) : (
                    "No hay ningun personaje con ese nombre"
                  )}
                </section>
              </>
            }
          />
          <Route
            path="/character/:id"
            element={<CharacterDetails findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
      <footer className="footer">
        <span>@copy; Adalabers 2024</span>
      </footer>
    </div>
  );
}

export default App;
