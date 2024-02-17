import PropTypes from "prop-types";

function FilterByHouse(handleFilterByHouse, filterHouse) {
  const handleSelectHouse = (event) => {
    handleFilterByHouse(event.currentTarget.value);
  };
  return (
    <div className="main__form--container">
      <label className="main__form--container--label" htmlFor="house">
        Selecciona la casa
      </label>
      <select onChange={handleSelectHouse} name="house" id="house" value={filterHouse}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </div>
  );
}

FilterByHouse.propTypes = {
  handleFilterByHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string,
};
export default FilterByHouse;
