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
  HALF_ORC,
  LIGHTFOOT_HALFLING,
  STOUT_HALFLING,
  HUMAN,
  TIEFLING,
  SUBRACES_AS_ARRAY
} from './races';
import {
  getStatsByRace,
  STATS_AS_ARRAY
} from './stats';

describe('Races', () => {
  describe('stats bonus', () => {
    const parseExpectedToStats = expected => STATS_AS_ARRAY
    .reduce((stats, statIndex, index) => ({
      ...stats,
      [statIndex]: expected[index]
    }), {}
  )
    const expectedStats = {
      // RACE                STR DEX CON INT WIS CHA
      [DRAGONBORN]:         [ 2,  0,  0,  0,  0,  1 ],
      [HILLS_DWARF]:        [ 0,  0,  2,  0,  1,  0 ],
      [MOUNTAINS_DWARF]:    [ 2,  0,  2,  0,  0,  0 ],
      [FOREST_ELF]:         [ 0,  2,  0,  0,  1,  0 ],
      [HIGH_ELF]:           [ 0,  2,  0,  1,  0,  0 ],
      [DARK_ELF]:           [ 0,  2,  0,  0,  0,  1 ],
      [FOREST_GNOME]:       [ 0,  1,  0,  2,  0,  0 ],
      [ROCK_GNOME]:         [ 0,  0,  1,  2,  0,  0 ],
      [HALF_ELF]:           [ 0,  0,  0,  0,  0,  2 ],
      [HALF_ORC]:           [ 2,  0,  1,  0,  0,  0 ],
      [LIGHTFOOT_HALFLING]: [ 0,  2,  0,  0,  0,  1 ],
      [STOUT_HALFLING]:     [ 0,  2,  1,  0,  0,  0 ],
      [HUMAN]:              [ 1,  1,  1,  1,  1,  1 ],
      [TIEFLING]:           [ 0,  0,  0,  1,  0,  2 ]
    };

    SUBRACES_AS_ARRAY.forEach(subrace => {
      it(`should return stats for ${subrace}`, () => {
        expect(getStatsByRace(subrace))
        .toEqual(parseExpectedToStats(expectedStats[subrace]));
      });
    });
  });
});