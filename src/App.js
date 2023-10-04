import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import ThemeToggle from './components/ThemeToggle';

function App() {
    const [darkTheme, setDarkTheme] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            fetch(`https://api.jikan.moe/v4/characters?q=${searchQuery}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCharacters(data.data);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error.message);
            });
        }
    }, [searchQuery]);
    

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };

    return (
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
            <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <CharacterList characters={characters} onCharacterClick={handleCharacterClick} />
            {selectedCharacter && <CharacterDetails character={selectedCharacter} />}
        </div>
    );
}

export default App;
