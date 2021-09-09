import React, { useContext } from 'react';
import './CharacterSheet.sass';
import {
  useTranslation
} from 'react-i18next';

import {
  AttackAndSpellcasting
} from '../components/AttackAndSpellcasting';
import {
  Attributes
} from '../components/Attributes';

import characterContext from '../state/characterContext';
import {
  Combat
} from '../components/Combat';
import {
  Equipment
} from '../components/Equipment';
import {
  Features
} from '../components/Features';
import {
  Flavour
} from '../components/Flavour';
import {
  Header
} from '../components/Header';
import {
  Perception
} from '../components/Perception';
import {
  OtherProfs
} from './OtherProfs';
import {
  getStatsByRace
} from '../engine/stats';

export const CharacterSheet = () => {
  const { t } = useTranslation('common');
  const character = useContext(characterContext);

  const onAlignmentChange = selectedAlignment => character.setAlignment(selectedAlignment);
  const onClassChange = selectedClass => character.setClass(selectedClass);
  const onNameChange = name => character.setName(name);
  const onRaceChange = selectedRace => {
    character.setRace(selectedRace);
    const statsByRace = getStatsByRace(selectedRace);
    character.setModifiers(statsByRace);
  };

  return (
    <form className="charsheet">
      <Header
        character={character}
        onAlignmentChange={onAlignmentChange}
        onClassChange={onClassChange}
        onNameChange={onNameChange}
        onRaceChange={onRaceChange}
        translate={t}
      />
      <main>
        <section>
          <Attributes
            attributes={character.attributes}
            modifiers={character.modifiers}
            translate={t}
          />
          <Perception
            perception={character.perception}
            translate={t}
          />
          <OtherProfs translate={t} />
        </section>
        <section>
          <Combat />
          <AttackAndSpellcasting />
          <Equipment />
        </section>
        <section>
          <Flavour />
          <Features />
        </section>
      </main>
    </form>
  );
};