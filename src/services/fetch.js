

export function fetchCharacters () {

  return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
  .then(response => response.json())
  .then(updatedData =>{
    return updatedData.map((eachObj) => {
      return{
        id: eachObj.id,
        name: eachObj.name,
        image: eachObj.image,
        species: eachObj.species,
        house: eachObj.house,
        gender:eachObj.gender,

      }
    })
  } )
}