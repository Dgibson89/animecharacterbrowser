import React from "react";

const CharacterDetails = ({ character }) => {
  if (!character) return null;

  return (
    <div>
      <img src={character.images.webp.image_url} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </div>
  );
};

export default CharacterDetails;
