import {
  BARBARIAN,
  BARD,
  CLASSES_AS_ARRAY,
  CLERIC,
  DRUID,
  FIGHTER,
  MONK,
  PALADIN,
  RANGER,
  ROGUE,
  SORCERER,
  WARLOCK,
  WIZARD
} from './classes';
import {
  DRAGONBORN,
  HILLS_DWARF,
  MOUNTAINS_DWARF,
  FOREST_ELF,
  HIGH_ELF,
  DARK_ELF,
  FOREST_GNOME,
  ROCK_GNOME,
  HALF_ELF,
  LIGHTFOOT_HALFLING,
  STOUT_HALFLING,
  HALF_ORC,
  HUMAN,
  TIEFLING,
} from './races';



export const STRENGTH = 'Fuerza';
export const DEXTERITY = 'Destreza';
export const CONSTITUTION = 'Constitución';
export const INTELLIGENCE = 'Inteligencia';
export const WISDOM = 'Sabiduría';
export const CHARISMA = 'Carisma';

export const STATS_AS_ARRAY = [
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA
];

export const STATS = {
  [STRENGTH]: {
    meaning: 'Capacidad atlética natural, potencial físico',
    importantTo: [BARBARIAN, FIGHTER, PALADIN],
    raceBonus: {
      [MOUNTAINS_DWARF]: +2, 
      [DRAGONBORN]: +2, 
      [HALF_ORC]: +2, 
      [HUMAN]: +1
    }
  },
  [DEXTERITY] :{
    meaning: 'Agilidad física, reflejos, equilibrio, compostura',
    importantTo: [MONK, RANGER, ROGUE],
    raceBonus: {
      [FOREST_ELF]: +2,
      [HIGH_ELF]: +2,
      [DARK_ELF]: +2,
      [LIGHTFOOT_HALFLING]: +2,
      [STOUT_HALFLING]: +2,
      [FOREST_GNOME]: +1,
      [HUMAN]: +1
    }
  },
  [CONSTITUTION]: {
    meaning: 'Salud, resistencia, fuerza vital',
    importantTo: CLASSES_AS_ARRAY,
    raceBonus: {
      [HILLS_DWARF]: +2,
      [MOUNTAINS_DWARF]: +2,
      [STOUT_HALFLING]: +1,
      [ROCK_GNOME]: +1,
      [HALF_ORC]: +1,
      [HUMAN]: +1
    }
  },
  [INTELLIGENCE]: {
    meaning: 'Agilidad mental, memoria, capacidad analítica',
    importantTo: [WIZARD],
    raceBonus: {
      [HIGH_ELF]: +1,
      [FOREST_GNOME]: +2,
      [ROCK_GNOME]: +2,
      [TIEFLING]: +1,
      [HUMAN]: +1
    }
  },
 [WISDOM]: {
    meaning: 'Consciencia, intuición, perspicacia',
    importantTo: [CLERIC, DRUID],
    raceBonus:{
      [HILLS_DWARF]: +1,
      [FOREST_ELF]: +1,
      [HUMAN]: +1
    }
  },
  [CHARISMA]: {
    meaning: 'Confianza, elocuencia, liderazgo',
    importantTo: [BARD, SORCERER, WARLOCK],
    raceBonus: {
      [HALF_ELF]: +2,
      [DARK_ELF]: +1,
      [LIGHTFOOT_HALFLING]: +1,
      [DRAGONBORN]: +1,
      [HUMAN]: +1,
      [TIEFLING]: +2
    }
  }
};

export const getStatsByRace = race => STATS_AS_ARRAY
    .reduce((stats, statIndex) => ({
      ...stats,
      [statIndex]: STATS[statIndex].raceBonus[race] || 0
    }), {}
  );