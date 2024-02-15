import PropTypes from "prop-types";
function CharacterCard({character}) {
  return (
    <>
      <img
        className="main__list--listItem--image"
        src={character.image}
        alt="Harry Potter"
      />
      <h3 className="main__list--listItem--name">{character.name}</h3>
      <p className="main__list--listItem--specie">{character.species}</p>
    </>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
};
export default CharacterCard;
