import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";


function CharacterList({}) {

  return (
    <ul className="main__list">
    <li className="main__list--listItem">
      <CharacterCard/>
    </li>
  </ul>
  );
}
CharacterList.propTypes = {
  characters: PropTypes.string,
};
export default CharacterList;