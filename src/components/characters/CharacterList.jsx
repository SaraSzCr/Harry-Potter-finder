import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    const showImg = character.image
      ? character.image
      : "./images/mysteriousCharacter.jpg";

      // "./images/mysteriousCharacter.jpg"
    return (
      <li key={character.id} className="main__list--listItem">
        <CharacterCard character={character} showImg={showImg} />
      </li>
    );
  });

  return <ul className="main__list">{renderCharacters}</ul>;
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
