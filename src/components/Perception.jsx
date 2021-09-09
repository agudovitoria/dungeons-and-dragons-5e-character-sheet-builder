import React from 'react';

export const Perception = ({ perception, translate }) => {
  return (
    <div className="passive-perception box">
      <div className="label-container">
        <label htmlFor="passiveperception">{translate('character.perception')}</label>
      </div>
      <input
        name="passiveperception"
        placeholder={perception} />
    </div>
  );
};
