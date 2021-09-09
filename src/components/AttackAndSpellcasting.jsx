import React from 'react';


export const AttackAndSpellcasting = () => {
  return (
    <section className="attacksandspellcasting">
      <div>
        <label>Attacks &amp; Spellcasting</label>
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Atk Bonus
              </th>
              <th>
                Damage/Type
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input name="atkname1" type="text" />
              </td>
              <td>
                <input name="atkbonus1" type="text" />
              </td>
              <td>
                <input name="atkdamage1" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input name="atkname2" type="text" />
              </td>
              <td>
                <input name="atkbonus2" type="text" />
              </td>
              <td>
                <input name="atkdamage2" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input name="atkname3" type="text" />
              </td>
              <td>
                <input name="atkbonus3" type="text" />
              </td>
              <td>
                <input name="atkdamage3" type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <textarea></textarea>
      </div>
    </section>
  );
};
