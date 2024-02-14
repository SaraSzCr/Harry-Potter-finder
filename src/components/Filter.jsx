function Filters() {

  return (
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
  );
}

export default Filters;