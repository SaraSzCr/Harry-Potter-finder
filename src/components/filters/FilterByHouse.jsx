function FilterByHouse() {
  return (
    <div className="main__form--container">
      <label className="main__form--container--label" htmlFor="house">
        Selecciona la casa
        <select>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </label>
    </div>
  );
}

export default FilterByHouse;
