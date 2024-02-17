import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";

function CharacterDetails({findCharacter}) {

  const params = useParams();

  const character = findCharacter(params.id)

  console.log(character);

  return (
    <div>
      <img
        className="main__list--listItem--image"
        src={character.image}
        alt="Harry Potter"
      />
      <div>
        <h3 className="main__list--listItem--name">{character.name}</h3>
        <p className="main__list--listItem--name">{character.status}</p>
        <p className="main__list--listItem--name">{character.gender}</p>
        <p className="main__list--listItem--name">{character.house}</p>
        <p className="main__list--listItem--species">{character.species}</p>
      </div>
      <Link to="/">Volver</Link>
    </div>
  );
}

CharacterDetails.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};
export default CharacterDetails;
