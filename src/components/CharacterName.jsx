import React from 'react';

export const CharacterName = ({
  onChange,
  translate
}) => {
  const onChangeName = evt => onChange(evt.target.value);
  return (
    <section className="charname">
      <label htmlFor="charname">{translate('character.character-name')}</label>
      <input
        name="charname"
        onChange={onChangeName}
        placeholder={translate('default.input-empty')} />
    </section>
  );
};
