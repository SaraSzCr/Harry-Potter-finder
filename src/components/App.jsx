import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filter";

function App() {
  return (
    <div>
      <header className="title">
        <h1>Harry Potter</h1>
      </header>
      <main>
        <Filters />
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
