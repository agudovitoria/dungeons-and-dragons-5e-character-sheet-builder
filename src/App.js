import React, {
  Suspense,
  useState 
} from 'react';
import './App.sass';
import GlobalContext, { initialState as globalInitialState } from './state/globalContext';
import CharacterContext, { initialState as characterInitialState } from './state/characterContext';
import {
  CharacterSheet
} from './containers/CharacterSheet';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  const [characterAlignment, setCharacterAlignment] = useState(characterInitialState.alignment);
  const [characterClass, setCharacterClass] = useState(characterInitialState.class);
  const [characterModifiers, setCharacterModifiers] = useState(characterInitialState.modifiers);
  const [characterName, setCharacterName] = useState(characterInitialState.name);
  const [characterRace, setCharacterRace] = useState(characterInitialState.race);
  const [playerName, setPlayerName] = useState(characterInitialState.playerName);
  const [characterAttributes, setCharacterAttributes] = useState(characterInitialState.attributes);

  const initialState = {
    ...characterInitialState,
    attributes: characterAttributes,
    alignment: characterAlignment,
    class: characterClass,
    modifiers: characterModifiers,
    name: characterName,
    race: characterRace,
    playerName,
    setAttributes: setCharacterAttributes,
    setAlignment: setCharacterAlignment,
    setClass: setCharacterClass,
    setModifiers: setCharacterModifiers,
    setName: setCharacterName,
    setPlayerName,
    setRace: setCharacterRace
  };
  
  return (
    <GlobalContext.Provider value={globalInitialState}>
      <Suspense fallback="loading">
        <div className="App">
          <LanguageSelector language={globalInitialState.lang}/>
          <CharacterContext.Provider value={initialState}>
            <CharacterSheet />
          </CharacterContext.Provider>
        </div>
      </Suspense>
    </GlobalContext.Provider>
  );
}

export default App;
