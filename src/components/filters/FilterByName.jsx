import PropTypes from "prop-types";

function FiltersByName({ handleFilterByName, filterName }) {
  const handleInputName = (event) => {
    handleFilterByName(event.currentTarget.value);
  };

  return (
    <div className="main__form--container">
      <label className="main__form--container--label" htmlFor="text">
        Busca por personaje
      </label>
      <input
        className="main__form--filter"
        type="text"
        name="text"
        id="text"
        value={filterName}
        onChange={handleInputName}
      />
    </div>
  );
}
FiltersByName.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
  filterName: PropTypes.string,
};

export default FiltersByName;
