import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li key={character.id} className="main__list--listItem">
        <CharacterCard character={character} />
      </li>
    );
  });

  return <ul className="main__list">{renderCharacters}</ul>;
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
