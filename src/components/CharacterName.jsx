import React from 'react';

export const CharacterName = ({ translate }) => {
  return (
    <section className="charname">
      <label htmlFor="charname">{translate('character.character-name')}</label>
      <input
        name="charname"
        placeholder={translate('default.input-empty')} />
    </section>
  );
};
