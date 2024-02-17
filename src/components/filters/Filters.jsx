
import PropTypes from "prop-types";
import FilterByHouse from "./FilterByHouse";
import FiltersByName from "./FilterByName";

function Filters({ handleFilterByName, filterName, handleFilterByHouse, filterHouse }) {
  return (
    <form className="main__form">
      <FiltersByName handleFilterByName={handleFilterByName} filterName={filterName} />
      <FilterByHouse handleFilterByHouse={handleFilterByHouse} filterHouse={filterHouse} />
    </form>
  );
}

Filters.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
  filterName: PropTypes.string,
  handleFilterByHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string,
};

export default Filters;
