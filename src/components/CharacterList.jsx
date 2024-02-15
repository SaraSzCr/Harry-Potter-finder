import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character,idx) => {
    return(
    <li key={idx} className="main__list--listItem">
      <CharacterCard img={character.image} name={character.name} species={character.species} />
    </li>
    )
});


  return <ul className="main__list">{renderCharacters}</ul>;
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
