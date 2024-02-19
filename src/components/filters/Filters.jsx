
import PropTypes from "prop-types";
import FilterByHouse from "./FilterByHouse";
import FiltersByName from "./FilterByName";

function Filters({ handleFilterByName, filterName, handleFilterByHouse, filterHouse, handleResetBtn }) {


  const handleSubmit = (event) => {
    event.preventDefault()
    handleResetBtn (event.currentTarget)

  }
  
  

  return (
    <form className="main__form">
      <FiltersByName handleFilterByName={handleFilterByName} filterName={filterName} />
      <FilterByHouse handleFilterByHouse={handleFilterByHouse} filterHouse={filterHouse} />
      <input onSubmit={handleSubmit} className="main__form--container--btn" type="submit" value="Volver al inicio" />
    </form>
  );
}

Filters.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
  filterName: PropTypes.string,
  handleFilterByHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string,
  handleResetBtn:PropTypes.func.isRequired,
};

export default Filters;
