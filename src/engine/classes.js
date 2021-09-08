import {
  D8,
  D10,
  D20,
  D6
} from './dices';

import {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA
} from './stats';

export const BARBARIAN = 'Bàrbaro';
export const BARD = 'Bardo';
export const CLERIC = 'Clèrigo';
export const DRUID = 'Druida';
export const FIGHTER = 'Guerrero';
export const MONK = 'Monje';
export const PALADIN = 'Paladín';
export const RANGER = 'Explorador';
export const ROGUE = 'Pìcaro';
export const SORCERER = 'Hechicero';
export const WARLOCK = 'Brujo';
export const WIZARD = 'Mago';

export const CLASSES_AS_ARRAY = [
  BARBARIAN,
  BARD,
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
];

export const STATS = {
  [BARBARIAN]: {
    description: 'Un feroz guerrero de trasfondo primitivo que puede entrar en una furia de batalla',
    hitDie: D20,
    primaryAbility: [STRENGTH],
    saves: [STRENGTH, CONSTITUTION]
  },
  [BARD]: {
    description: 'Un mago inspirador cuyo poder replica la música de la creación',
    hitDie: D8,
    primaryAbility: [CHARISMA],
    saves: [DEXTERITY, CHARISMA]
  },
  [CLERIC]: {
    description: 'Un campeón sacerdotal que esgrime magia divina al servicio de un poder mayor.',
    hitDie: D8,
    primaryAbility: [WISDOM],
    saves: [WISDOM, CHARISMA]
  },
  [DRUID]: {
    description: 'Un sacerdote de la Antigua Fe, que blande los poderes de la naturaleza —la luz de la luna y el crecimiento de las plantas, el fuego y el rayo— y que adopta formas animales',
    hitDie: D8,
    primaryAbility: [WISDOM],
    saves: [INTELLIGENCE, WISDOM]
  },
  [FIGHTER]: {
    description: 'Un maestro del combate marcial, competente con una gran variedad de armas y armaduras',
    hitDie: D10,
    primaryAbility: [STRENGTH, DEXTERITY],
    saves: [STRENGTH, CONSTITUTION]
  },
  [MONK]: {
    description: 'Un maestro de las artes marciales, que domina el poder del cuerpo en busca de la perfección física y espiritual',
    hitDie: D8,
    primaryAbility: [DEXTERITY, WISDOM],
    saves: [STRENGTH, DEXTERITY]
  },
  [PALADIN]: {
    description: 'Un guerrero santo atado a un juramento sagrado.',
    hitDie: D10,
    primaryAbility: [STRENGTH, CHARISMA],
    saves: [WISDOM, CHARISMA]
  },
  [RANGER]: {
    description: 'Un guerrero que usa la proeza marcial y la magia de la naturaleza para combatir las amenazas en los límites de la civilización',
    hitDie: D10,
    primaryAbility: [DEXTERITY, WISDOM],
    saves: [STRENGTH, DEXTERITY]
  },
  [ROGUE]: {
    description: 'Un rufián que usa sigilo y astucia para superar obstáculos y enemigos',
    hitDie: D8,
    primaryAbility: [DEXTERITY],
    saves: [DEXTERITY, INTELLIGENCE]
  },
  [SORCERER]: {
    description: 'Un lanzador de conjuros que recurre a la magia inherente de un don o una línea de sangre',
    hitDie: D6,
    primaryAbility: [CHARISMA],
    saves: [CONSTITUTION, CHARISMA] 
  },
  [WARLOCK]: {
    description: 'Un practicante de la magia que deriva de un contrato con una entidad extraplanaria',
    hitDie: D8,
    primaryAbility: [CHARISMA],
    saves: [WISDOM, CHARISMA]
  },
  [WIZARD]: {
    description: 'Un usuario de magia educado capaz de manipular la estructura de la realidad',
    hitDie: D6,
    primaryAbility: [INTELLIGENCE],
    saves: [INTELLIGENCE, WISDOM]
  }
};
