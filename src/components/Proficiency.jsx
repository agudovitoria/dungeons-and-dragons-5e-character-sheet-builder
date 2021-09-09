import React from 'react';

export const Proficiency = ({ translate, value }) => (
  <div className="proficiencybonus box">
    <div className="label-container">
      <label htmlFor="proficiencybonus">{translate('character.proficiency-bonus')}</label>
    </div>
    <input
      name="proficiencybonus"
      readOnly
      value={value} />
  </div>
);
