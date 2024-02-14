function FiltersByName() {

  return (
    <div>
    <label htmlFor="text">Busca por personaje</label>
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