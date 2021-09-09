import React, { Fragment } from 'react';
import { RACES_AS_ARRAY } from '../engine/races';
import { EmptyOption } from './EmptyOption';

export const Race = ({
  onChange,
  translate
}) => {
  const onRaceChange = evt => onChange(evt.target.value);
  return (
    <Fragment>
      <label htmlFor="race">{translate('character.race')}</label>
      <select onChange={onRaceChange}>
        <EmptyOption translate={translate} />
        {RACES_AS_ARRAY.map((it, index) => <option key={`${it}-${index}`} value={it}>{it}</option>)}
      </select>
    </Fragment>
  );
};
