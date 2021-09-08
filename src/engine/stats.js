import {
  DRAGONBORN,
  HILLS_DWARF,
  MOUNTAINS_DWARF,
  FOREST_ELF,
  HIGH_ELF,
  DARK_ELF,
  GNOME,
  FOREST_GNOME,
  ROCK_GNOME,
  HALF_ELF,
  LIGHTFOOT_HALFLING,
  STOUT_HALFLING,
  HALF_ORC,
  HUMAN,
  TIEFLING,
} from './races';



export const STRONG = 'Fuerza';
export const DEXTERITY = 'Destreza';
export const CONSTITUTION = 'Constitución';
export const INTELLIGENCE = 'Inteligencia';
export const WISDOM = 'Sabiduría';
export const CHARISMA = 'Carisma';

export const STATS_AS_ARRAY = [
  STRONG,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA
];

export const STATS = {
  [STRONG]: {
    meaning: 'Capacidad atlética natural, potencial físico',
    importantTo: ['bárbaro', 'guerrero', 'paladín'],
    raceBonus: {
      [MOUNTAINS_DWARF]: +2, 
      [DRAGONBORN]: +2, 
      [HALF_ORC]: +2, 
      [HUMAN]: +1
    }
  },
  [DEXTERITY] :{
    meaning: 'Agilidad física, reflejos, equilibrio, compostura',
    importantTo: ['monje', 'explorador', 'pícaro'],
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
    importantTo: ['*'],
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
    importantTo: ['mago'],
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
    importantTo: ['clérigo', 'druida'],
    raceBonus:{
      [HILLS_DWARF]: +1,
      [FOREST_ELF]: +1,
      [HUMAN]: +1
    }
  },
  [CHARISMA]: {
    meaning: 'Confianza, elocuencia, liderazgo',
    importantTo: ['bardo', 'hechicero', 'brujo'],
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