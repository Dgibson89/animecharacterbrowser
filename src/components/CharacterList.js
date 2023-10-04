import React from 'react';

const CharacterList = ({ characters, onCharacterClick }) => {
    return (
        <div>
            {characters.map(character => (
                <div key={character.mal_id} onClick={() => onCharacterClick(character)}>
                    {character.name}
                    {/* Additional details can be added as needed */}
                </div>
            ))}
        </div>
    );
}

export default CharacterList;
