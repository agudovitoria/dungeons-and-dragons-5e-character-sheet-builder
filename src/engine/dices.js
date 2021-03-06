import _ from 'underscore';

export const D4 = 4;
export const D6 = 6;
export const D8 = 8;
export const D10 = 10;
export const D12 = 12;
export const D20 = 20;
export const D100 = 100;

export const rollDice = dice => _.random(0, dice);
