import PropTypes from "prop-types";
import FilterByHouse from "./FilterByHouse";
import FiltersByName from "./FilterByName";

function Filters({ handleFilterByName, filterName }) {
  return (
    <form className="main__form">
      <FiltersByName handleFilterByName={handleFilterByName} filterName={filterName} />
      <FilterByHouse />
    </form>
  );
}

Filters.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
  filterName: PropTypes.string,
};

export default Filters;
