//import Image from "next/image";
import Link from "next/link";

// TO-DO: handle pagination from API

// function to fetch characters from API
async function getCharacters() {
  let apiUrl = 'https://www.demonslayer-api.com/api/v1/characters';
  let characters = [];
  let isMorePages = true;

  // For each response, if nextPage has a value, make another fetch. Cycle through this until nextPage is blank.
  while(isMorePages){
    const response = await fetch(apiUrl);
    const data = await response.json();
    characters = characters.concat(data.content);

    if(data.pagination.nextPage) {
        // continue loop, make another fetch api call
        apiUrl = data.pagination.nextPage;
    } else {
      // no more pages left, exit loop
      isMorePages = false;
    }
  }
  
  return characters;
}

// Character component
export default async function Characters(){
  const characters = await getCharacters();
  
  return (
    <>
      <h2>Characters</h2>
      <p>
        <Link href="/characters/add" className="btn btn-info">Add Favorite</Link>
      </p>
      {characters.length > 0 && characters.map((character) => (
        <div className="row mb-3" key={character.id}>
          <div className="col-lg-2">
            <img src={character.img} alt={character.name} className="img-fluid" />
          </div>
          <div className="col-lg-10">
            <h3>{character.name}</h3>
            <blockquote>"{character.quote}"</blockquote>
            <p>
              {character.description}
            </p>
            <p>
              {character.race + ', ' + character.gender}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}