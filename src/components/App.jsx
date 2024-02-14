import "../scss/App.scss";

function App() {
  return (
    <div>
      <header className="title">
        <h1>Harry Potter</h1>
      </header>
      <main>
        <form className="main__form">
          <label htmlFor="text">Busca por personaje</label>
          <input
            className="main__form--filter"
            type="text"
            name="text"
            id="text"
          />
          <label htmlFor="house">
            Selecciona la casa
            <select>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slytherin">Slytherin</option>
            </select>
          </label>
        </form>

        <ul className="main__list">
          <li className="main__list--listItem">
            <img className="main__list--listItem--image"
              src="https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
              alt="Harry Potter"
            />
            <h3 className="main__list--listItem--name">Harry Potter</h3>
            <p className="main__list--listItem--specie">human</p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
