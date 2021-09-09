import React from 'react';
import {
  Alignment
} from './Alignment';
import {
  Background
} from './Background';
import {
  ClassAndLevel
} from './ClassAndLevel';
import {
  ExperiencePoints
} from './ExperiencePoints';
import {
  CharacterName
} from './CharacterName';
import {
  PlayerName
} from './PlayerName';
import {
  Race
} from './Race';

export const Header = ({
  character,
  onAlignmentChange,
  onClassChange,
  onNameChange,
  onRaceChange,
  translate
}) => (
  <header>
    <CharacterName
      onChange={onNameChange}
      translate={translate}
    />
    <section className="misc">
      <ul>
        <li>
          <ClassAndLevel
            onChange={selectedClass => onClassChange(selectedClass)}
            translate={translate}
          />
        </li>
        <li>
          <Background translate={translate} />
        </li>
        <li>
          <PlayerName translate={translate} />
        </li>
        <li>
          <Race
            onChange={selectedRace => onRaceChange(selectedRace)}
            translate={translate}
          />
        </li>
        <li>
          <Alignment
            onChange={selectedAlignment => onAlignmentChange(selectedAlignment)}
            translate={translate}
          />
        </li>
        <li>
          <ExperiencePoints
            experiencePoints={character.xp}
            translate={translate}
          />
        </li>
      </ul>
    </section>
  </header >
);
