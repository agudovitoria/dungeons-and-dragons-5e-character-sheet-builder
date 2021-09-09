import React from 'react';


export const Equipment = () => {
  return (
    <section className="equipment">
      <div>
        <label>Equipment</label>
        <div className="money">
          <ul>
            <li>
              <label htmlFor="cp">cp</label><input name="cp" />
            </li>
            <li>
              <label htmlFor="sp">sp</label><input name="sp" />
            </li>
            <li>
              <label htmlFor="ep">ep</label><input name="ep" />
            </li>
            <li>
              <label htmlFor="gp">gp</label><input name="gp" />
            </li>
            <li>
              <label htmlFor="pp">pp</label><input name="pp" />
            </li>
          </ul>
        </div>
        <textarea placeholder="Equipment list here"></textarea>
      </div>
    </section>
  );
};
