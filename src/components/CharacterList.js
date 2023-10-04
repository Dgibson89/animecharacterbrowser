import React from "react";

const CharacterList = ({ characters, onCharacterClick }) => {
  return (
    <div className="mt-3">
      {characters && characters.map((character) => (
        <div
          key={character.mal_id}
          onClick={() => onCharacterClick(character)}
          className="list-group-item list-group-item-action"
        >
          {character.name}
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
