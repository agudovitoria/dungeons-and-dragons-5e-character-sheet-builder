
import { createContext } from 'react';

export const initialState = {
  attributes: {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  },
  modifiers: {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  },
  inspiration: false,
  proficiency: 0,
  class: null,
  level: 1,
  name: null,
  perception: 10,
  playerName: null,
  race: null,
  xp: 0,
  setAttributes: () => {},
  setAlignment: () => {},
  setClass: () => {},
  setModifiers: () => {},
  setName: () => {},
  setPlayerName: () => {},
  setRace: () => {}
};

export default createContext();