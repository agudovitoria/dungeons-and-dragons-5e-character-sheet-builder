import React, { Fragment } from 'react';
import { RACES_AS_ARRAY } from '../engine/races';
import { EmptyOption } from './EmptyOption';

export const Race = ({ translate }) => {
  return (
    <Fragment>
      <label htmlFor="race">{translate('character.race')}</label>
      <select name="race">
        <EmptyOption translate={translate} />
        {RACES_AS_ARRAY.map((it, index) => <option key={`${it}-${index}`} value={it}>{it}</option>)}
      </select>
    </Fragment>
  );
};
