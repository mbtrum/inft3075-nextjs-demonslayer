//import Image from "next/image";

// TO-DO: handle pagination from API

// function to fetch characters from API
async function getCharacters() {
  const response = await fetch('https://www.demonslayer-api.com/api/v1/characters?page=3');
  const data = await response.json();
  return data.content;
}

// Character component
export default async function Characters(){
  const characters = await getCharacters();
  
  return (
    <>
      <h2>Characters</h2>
      {characters.length > 0 && characters.map((character) => (
        <div className="row mb-3" key={character.id}>
          <div className="col-lg-2">
            <img src={character.img} alt={character.name} className="img-fluid" />
          </div>
          <div className="col-lg-10">
            <h3>{character.name}</h3>
            <blockquote>"{character.quote}"</blockquote>
          </div>
        </div>
      ))}
    </>
  )
}