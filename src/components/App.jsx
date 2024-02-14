import '../scss/App.scss'

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
      <label htmlFor="character">
        Selecciona la casa
        <select>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </label>
    </form>
    <ul>
      <li>
        <img src="https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter" alt="Harry Potter" />
        <h3>Harry Potter</h3>
        <p>human</p>
      </li>
    </ul>

      </main>
    </div>
  )
}

export default App
