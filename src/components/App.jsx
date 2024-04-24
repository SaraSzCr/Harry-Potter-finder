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

  const handleResetBtn = () => {
    setCharacters("");
  };

  const handleFilterByName = (inputValue) => {
    setFilterName(inputValue);
  };

  const handleFilterByHouse = (selectValue) => {
    setFilterHouse(selectValue);
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
                  handleResetBtn={handleResetBtn}
                />
                <section className="sectionText">
                  {filteredName.length > 0 ? (
                    <CharacterList characters={filteredName} />
                  ) : (
                    "No hay ningun personaje con ese nombre"
                  )}
                </section>
                {/* <section className="sectionText">
                  {findCharacter.id ? (
                    <CharacterDetails findCharacter={findCharacter} />
                  ) : (
                    "No hay ningun personaje"
                  )}
                </section> */}
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

      Creado por &copy;
      <a
        className="author"
        href="https://github.com/SaraSzCr"
        target="_blank"
        rel="noopener noreferrer"
        >  SaraSC</a>
      </footer>
    </div>
  );
}

export default App;
