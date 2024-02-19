import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function CharacterCard({character, showImg}) {
  return (
    <Link className="link" to={"/character/" + character.id}>
      <>
        <img
          className="main__list--listItem--image"
          src={showImg}
          alt="Harry Potter"
        />
        <h3 className="main__list--listItem--name">{character.name}</h3>
        <p className="main__list--listItem--species">{character.species}</p>
      </>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  showImg: PropTypes.string.isRequired,
};
export default CharacterCard;
