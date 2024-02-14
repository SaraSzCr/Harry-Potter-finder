import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";

function App() {
  return (
    <div>
      <header className="title">
        <h1>Harry Potter</h1>
      </header>
      <main className="main" >
        <Filters />
        <CharacterList />
      </main>
      <footer className="footer" ><span>@copy; Adalab 2024</span></footer>
    </div>
  );
}

export default App;
