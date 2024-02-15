import PropTypes from "prop-types";
function CharacterCard({character, showImg}) {
  return (
    <>
      <img
        className="main__list--listItem--image"
        src={showImg}
        alt="Harry Potter"
      />
      <h3 className="main__list--listItem--name">{character.name}</h3>
      <p className="main__list--listItem--species">{character.species}</p>
    </>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  showImg: PropTypes.string.isRequired,
};
export default CharacterCard;
