function FiltersByName() {

  return (
    <div className="main__form--container">
    <label className="main__form--container--label" htmlFor="text">Busca por personaje</label>
    <input
      className="main__form--filter"
      type="text"
      name="text"
      id="text"
    />
    </div>
  );
}

export default FiltersByName;