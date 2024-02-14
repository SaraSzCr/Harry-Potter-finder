import CharacterCard from "./CharacterCard";

function CharacterList() {

  return (
    <ul className="main__list">
    <li className="main__list--listItem">
      <CharacterCard/>
    </li>
  </ul>
  );
}

export default CharacterList;