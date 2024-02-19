import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";

function CharacterDetails({ findCharacter }) {
  const params = useParams();

  const character = findCharacter(params.id);

  console.log(character);

  return (
    <div className="cardContainer" >
      <img
        className="main__list--listItem--image"
        src={character.image}
        alt="Harry Potter"
      />
      <div className="cardDetails">
        <h3 className="main__list--listItem--name">{character.name}</h3>
        <p className="main__list--listItem--name">
          <strong>Status: </strong>
          {character.alive ? "Alive" : "Dead"}
        </p>
        <p className="main__list--listItem--name">
          <strong> Gender: </strong> {character.gender}</p>
        <p className="main__list--listItem--name">
          <strong>House: </strong> {character.house}</p>
        <p className="main__list--listItem--name">
          <strong>Specie: </strong> {character.species}</p>
      </div>
      <div className="linkReturn" ><Link className="linkCard" to="/">Volver</Link></div>
      </div>

  );
}

CharacterDetails.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};
export default CharacterDetails;
