import React, { Suspense } from 'react';
import './App.sass';
import GlobalContext, { initialState as globalInitialState } from './state/globalContext';
import CharacterContext, { initialState as characterInitialState } from './state/characterContext';
import {
  CharacterSheet
} from './containers/CharacterSheet';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  return (
    <GlobalContext.Provider value={globalInitialState}>
      <Suspense fallback="loading">
        <div className="App">
          <LanguageSelector language={globalInitialState.lang}/>
          <CharacterContext.Provider value={characterInitialState}>
            <CharacterSheet />
          </CharacterContext.Provider>
        </div>
      </Suspense>
    </GlobalContext.Provider>
  );
}

export default App;
