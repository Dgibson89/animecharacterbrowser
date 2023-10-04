import React from "react";

const CharacterDetails = ({ character }) => {
  if (!character) return null;

  return (
    <div className="mt-3 card">
      <img
        src={character.images.jpg.image_url}
        alt={character.name}
        className="img-fluid card-img-top"
      />
      <div className="card-body">
        <h2 className="card-title">{character.name}</h2>
        <p className="card-text">{character.about}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
