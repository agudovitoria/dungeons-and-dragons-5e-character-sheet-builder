import React from 'react';


export const Combat = () => {
  return (
    <section className="combat">
      <div className="armorclass">
        <div>
          <label htmlFor="ac">Armor Class</label><input name="ac" placeholder="10" type="text" />
        </div>
      </div>
      <div className="initiative">
        <div>
          <label htmlFor="initiative">Initiative</label><input name="initiative" placeholder="+0" type="text" />
        </div>
      </div>
      <div className="speed">
        <div>
          <label htmlFor="speed">Speed</label><input name="speed" placeholder="30" type="text" />
        </div>
      </div>
      <div className="hp">
        <div className="regular">
          <div className="max">
            <label htmlFor="maxhp">Hit Point Maximum</label><input name="maxhp" placeholder="10" type="text" />
          </div>
          <div className="current">
            <label htmlFor="currenthp">Current Hit Points</label><input name="currenthp" type="text" />
          </div>
        </div>
        <div className="temporary">
          <label htmlFor="temphp">Temporary Hit Points</label><input name="temphp" type="text" />
        </div>
      </div>
      <div className="hitdice">
        <div>
          <div className="total">
            <label onClick={() => { }} htmlFor="totalhd">Total</label><input name="totalhd" placeholder="2d10" type="text" />
          </div>
          <div className="remaining">
            <label htmlFor="remaininghd">Hit Dice</label><input name="remaininghd" type="text" />
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
