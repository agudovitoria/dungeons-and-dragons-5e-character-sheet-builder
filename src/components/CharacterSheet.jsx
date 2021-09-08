import React from 'react';

import './CharacterSheet.css';

export const Header = () => {
  return (
    <header>
      <section className="charname">
        <label for="charname">Character Name</label>
        <input name="charname" placeholder="Thoradin Fireforge" />
      </section>
      <section className="misc">
        <ul>
          <li>
            <label for="classlevel">Class &amp; Level</label>
            <input name="classlevel" placeholder="Paladin 2" />
          </li>
          <li>
            <label for="background">Background</label>
            <input name="background" placeholder="Acolyte" />
          </li>
          <li>
            <label for="playername">Player Name</label>
            <input name="playername" placeholder="Player McPlayerface" />
          </li>
          <li>
            <label for="race">Race</label>
            <input name="race" placeholder="Half-elf" />
          </li>
          <li>
            <label for="alignment">Alignment</label>
            <input name="alignment" placeholder="Lawful Good" />
          </li>
          <li>
            <label for="experiencepoints">Experience Points</label>
            <input name="experiencepoints" placeholder="3240" />
          </li>
        </ul>
      </section>
    </header>
  );
};

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

export const Attributes = () => {
  return (
    <section className="attributes">
      <div className="scores">
        <ul>
          <li>
            <div className="score">
              <label for="Strengthscore">Strength</label><input name="Strengthscore" placeholder="10" className="stat" />
            </div>
            <div className="modifier">
              <input name="Strengthmod" placeholder="+0" className="statmod" />
            </div>
          </li>
          <li>
            <div className="score">
              <label for="Dexterityscore">Dexterity</label><input name="Dexterityscore" placeholder="10" className="stat" />
            </div>
            <div className="modifier">
              <input name="Dexteritymod" placeholder="+0" className="statmod" />
            </div>
          </li>
          <li>
            <div className="score">
              <label for="Constitutionscore">Constitution</label><input name="Constitutionscore" placeholder="10" className="stat" />
            </div>
            <div className="modifier">
              <input name="Constitutionmod" placeholder="+0" className="statmod" />
            </div>
          </li>
          <li>
            <div className="score">
              <label for="Wisdomscore">Wisdom</label><input name="Wisdomscore" placeholder="10" className="stat" />
            </div>
            <div className="modifier">
              <input name="Wisdommod" placeholder="+0" />
            </div>
          </li>
          <li>
            <div className="score">
              <label for="Intelligencescore">Intelligence</label><input name="Intelligencescore" placeholder="10" className="stat" />
            </div>
            <div className="modifier">
              <input name="Intelligencemod" placeholder="+0" className="statmod" />
            </div>
          </li>
          <li>
            <div className="score">
              <label for="Charismascore">Charisma</label><input name="Charismascore" placeholder="10" className="stat" />
            </div>
            <div className="modifier">
              <input name="Charismamod" placeholder="+0" className="statmod" />
            </div>
          </li>
        </ul>
      </div>
      <div className="attr-applications">
        <div className="inspiration box">
          <div className="label-container">
            <label for="inspiration">Inspiration</label>
          </div>
          <input name="inspiration" type="checkbox" />
        </div>
        <div className="proficiencybonus box">
          <div className="label-container">
            <label for="proficiencybonus">Proficiency Bonus</label>
          </div>
          <input name="proficiencybonus" placeholder="+2" />
        </div>
        <div className="saves list-section box">
          <ul>
            <li>
              <label for="Strength-save">Strength</label><input name="Strength-save" placeholder="+0" type="text" /><input name="Strength-save-prof" type="checkbox" />
            </li>
            <li>
              <label for="Dexterity-save">Dexterity</label><input name="Dexterity-save" placeholder="+0" type="text" /><input name="Dexterity-save-prof" type="checkbox" />
            </li>
            <li>
              <label for="Constitution-save">Constitution</label><input name="Constitution-save" placeholder="+0" type="text" /><input name="Constitution-save-prof" type="checkbox" />
            </li>
            <li>
              <label for="Wisdom-save">Wisdom</label><input name="Wisdom-save" placeholder="+0" type="text" /><input name="Wisdom-save-prof" type="checkbox" />
            </li>
            <li>
              <label for="Intelligence-save">Intelligence</label><input name="Intelligence-save" placeholder="+0" type="text" /><input name="Intelligence-save-prof" type="checkbox" />
            </li>
            <li>
              <label for="Charisma-save">Charisma</label><input name="Charisma-save" placeholder="+0" type="text" /><input name="Charisma-save-prof" type="checkbox" />
            </li>
          </ul>
          <div className="label">
            Saving Throws
          </div>
        </div>
        <div className="skills list-section box">
          <ul>
            <li>
              <label for="Acrobatics">Acrobatics <span className="skill">(Dex)</span></label><input name="Acrobatics" placeholder="+0" type="text" /><input name="Acrobatics-prof" type="checkbox" />
            </li>
            <li>
              <label for="Animal Handling">Animal Handling <span className="skill">(Wis)</span></label><input name="Animal Handling" placeholder="+0" type="text" /><input name="Animal Handling-prof" type="checkbox" />
            </li>
            <li>
              <label for="Arcana">Arcana <span className="skill">(Int)</span></label><input name="Arcana" placeholder="+0" type="text" /><input name="Arcana-prof" type="checkbox" />
            </li>
            <li>
              <label for="Athletics">Athletics <span className="skill">(Str)</span></label><input name="Athletics" placeholder="+0" type="text" /><input name="Athletics-prof" type="checkbox" />
            </li>
            <li>
              <label for="Deception">Deception <span className="skill">(Cha)</span></label><input name="Deception" placeholder="+0" type="text" /><input name="Deception-prof" type="checkbox" />
            </li>
            <li>
              <label for="History">History <span className="skill">(Int)</span></label><input name="History" placeholder="+0" type="text" /><input name="History-prof" type="checkbox" />
            </li>
            <li>
              <label for="Insight">Insight <span className="skill">(Wis)</span></label><input name="Insight" placeholder="+0" type="text" /><input name="Insight-prof" type="checkbox" />
            </li>
            <li>
              <label for="Intimidation">Intimidation <span className="skill">(Cha)</span></label><input name="Intimidation" placeholder="+0" type="text" /><input name="Intimidation-prof" type="checkbox" />
            </li>
            <li>
              <label for="Investigation">Investigation <span className="skill">(Int)</span></label><input name="Investigation" placeholder="+0" type="text" /><input name="Investigation-prof" type="checkbox" />
            </li>
            <li>
              <label for="Medicine">Medicine <span className="skill">(Wis)</span></label><input name="Medicine" placeholder="+0" type="text" /><input name="Medicine-prof" type="checkbox" />
            </li>
            <li>
              <label for="Nature">Nature <span className="skill">(Int)</span></label><input name="Nature" placeholder="+0" type="text" /><input name="Nature-prof" type="checkbox" />
            </li>
            <li>
              <label for="Perception">Perception <span className="skill">(Wis)</span></label><input name="Perception" placeholder="+0" type="text" /><input name="Perception-prof" type="checkbox" />
            </li>
            <li>
              <label for="Performance">Performance <span className="skill">(Cha)</span></label><input name="Performance" placeholder="+0" type="text" /><input name="Performance-prof" type="checkbox" />
            </li>
            <li>
              <label for="Persuasion">Persuasion <span className="skill">(Cha)</span></label><input name="Persuasion" placeholder="+0" type="text" /><input name="Persuasion-prof" type="checkbox" />
            </li>
            <li>
              <label for="Religion">Religion <span className="skill">(Int)</span></label><input name="Religion" placeholder="+0" type="text" /><input name="Religion-prof" type="checkbox" />
            </li>
            <li>
              <label for="Sleight of Hand">Sleight of Hand <span className="skill">(Dex)</span></label><input name="Sleight of Hand" placeholder="+0" type="text" /><input name="Sleight of Hand-prof" type="checkbox" />
            </li>
            <li>
              <label for="Stealth">Stealth <span className="skill">(Dex)</span></label><input name="Stealth" placeholder="+0" type="text" /><input name="Stealth-prof" type="checkbox" />
            </li>
            <li>
              <label for="Survival">Survival <span className="skill">(Wis)</span></label><input name="Survival" placeholder="+0" type="text" /><input name="Survival-prof" type="checkbox" />
            </li>
          </ul>
          <div className="label">
            Skills
          </div>
        </div>
      </div>
    </section>
  );
};

export const Combat = () => {
  return (
    <section className="combat">
      <div className="armorclass">
        <div>
          <label for="ac">Armor Class</label><input name="ac" placeholder="10" type="text" />
        </div>
      </div>
      <div className="initiative">
        <div>
          <label for="initiative">Initiative</label><input name="initiative" placeholder="+0" type="text" />
        </div>
      </div>
      <div className="speed">
        <div>
          <label for="speed">Speed</label><input name="speed" placeholder="30" type="text" />
        </div>
      </div>
      <div className="hp">
        <div className="regular">
          <div className="max">
            <label for="maxhp">Hit Point Maximum</label><input name="maxhp" placeholder="10" type="text" />
          </div>
          <div className="current">
            <label for="currenthp">Current Hit Points</label><input name="currenthp" type="text" />
          </div>
        </div>
        <div className="temporary">
          <label for="temphp">Temporary Hit Points</label><input name="temphp" type="text" />
        </div>
      </div>
      <div className="hitdice">
        <div>
          <div className="total">
            <label onclick="totalhd_clicked()" for="totalhd">Total</label><input name="totalhd" placeholder="2d10" type="text" />
          </div>
          <div className="remaining">
            <label for="remaininghd">Hit Dice</label><input name="remaininghd" type="text" />
          </div>
        </div>
      </div>
      <div className="deathsaves">
        <div>
          <div className="label">
            <label>Death Saves</label>
          </div>
          <div className="marks">
            <div className="deathsuccesses">
              <label>Successes</label>
              <div className="bubbles">
                <input name="deathsuccess1" type="checkbox" />
                <input name="deathsuccess2" type="checkbox" />
                <input name="deathsuccess3" type="checkbox" />
              </div>
            </div>
            <div className="deathfails">
              <label>Failures</label>
              <div className="bubbles">
                <input name="deathfail1" type="checkbox" />
                <input name="deathfail2" type="checkbox" />
                <input name="deathfail3" type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Equipment = () => {
  return (
    <section className="equipment">
      <div>
        <label>Equipment</label>
        <div className="money">
          <ul>
            <li>
              <label for="cp">cp</label><input name="cp" />
            </li>
            <li>
              <label for="sp">sp</label><input name="sp" />
            </li>
            <li>
              <label for="ep">ep</label><input name="ep" />
            </li>
            <li>
              <label for="gp">gp</label><input name="gp" />
            </li>
            <li>
              <label for="pp">pp</label><input name="pp" />
            </li>
          </ul>
        </div>
        <textarea placeholder="Equipment list here"></textarea>
      </div>
    </section>
  );
};

export const Flavour = () => {
  return (
    <section className="flavor">
      <div className="personality">
        <label for="personality">Personality</label><textarea name="personality"></textarea>
      </div>
      <div className="ideals">
        <label for="ideals">Ideals</label><textarea name="ideals"></textarea>
      </div>
      <div className="bonds">
        <label for="bonds">Bonds</label><textarea name="bonds"></textarea>
      </div>
      <div className="flaws">
        <label for="flaws">Flaws</label><textarea name="flaws"></textarea>
      </div>
    </section>
  );
};

export const Features = () => {
  return (
    <section className="features">
      <div>
        <label for="features">Features &amp; Traits</label><textarea name="features"></textarea>
      </div>
    </section>
  );
};

export const CharacterSheet = () => {
  return (
    <form className="charsheet">
      <Header />
      <main>
        <section>
          <Attributes />
          <div className="passive-perception box">
            <div className="label-container">
              <label for="passiveperception">Passive Wisdom (Perception)</label>
            </div>
            <input name="passiveperception" placeholder="10" />
          </div>
          <div className="otherprofs box textblock">
            <label for="otherprofs">Other Proficiencies and Languages</label><textarea name="otherprofs"></textarea>
          </div>
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