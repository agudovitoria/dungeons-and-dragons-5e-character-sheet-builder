import React, {
  Suspense,
  useReducer
} from 'react';
import './App.sass';
import GlobalContext, { initialState as globalInitialState } from './state/globalContext';
import CharacterContext from './state/characterContext';
import {
  CharacterSheet
} from './containers/CharacterSheet';
import {
  LanguageSelector
} from './components/LanguageSelector';
import {
  characterInitialState,
  characterReducer
} from './state/reducers/characterReducer';

function App() {
  const [state, dispatch] = useReducer(characterReducer, characterInitialState);

  return (
    <GlobalContext.Provider value={globalInitialState}>
      <Suspense fallback="loading">
        <div className="App">
          <LanguageSelector language={globalInitialState.lang}/>
          <CharacterContext.Provider value={[state, dispatch]}>
            <CharacterSheet />
          </CharacterContext.Provider>
        </div>
      </Suspense>
    </GlobalContext.Provider>
  );
}

export default App;
