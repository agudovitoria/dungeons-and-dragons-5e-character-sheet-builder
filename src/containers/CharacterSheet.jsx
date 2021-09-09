import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { AttackAndSpellcasting } from '../components/AttackAndSpellcasting';
import { Attributes } from '../components/Attributes';

import './CharacterSheet.sass';
import characterContext from '../state/characterContext';
import { Combat } from '../components/Combat';
import { Equipment } from '../components/Equipment';
import { Features } from '../components/Features';
import { Flavour } from '../components/Flavour';
import { Header } from '../components/Header';
import { Perception } from '../components/Perception';
import { OtherProfs } from './OtherProfs';

export const CharacterSheet = () => {
  const { t } = useTranslation('common');
  const character = useContext(characterContext);

  console.log(character);

  return (
    <form className="charsheet">
      <Header
        character={character}
        translate={t}
      />
      <main>
        <section>
          <Attributes
            attributes={character.attributes}
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