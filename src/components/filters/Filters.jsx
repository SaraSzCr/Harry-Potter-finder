import FilterByHouse from "./FilterByHouse";
import FiltersByName from "./FilterByName";

function Filters() {

  return (
    <form className="main__form">
   <FiltersByName
  />
  <FilterByHouse/>
    
  </form>
  );
}

export default Filters;