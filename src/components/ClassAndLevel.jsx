import React, { Fragment } from 'react';
import { CLASSES_AS_ARRAY } from '../engine/classes';
import { EmptyOption } from './EmptyOption';

export const ClassAndLevel = ({ translate, onChange }) => {
  const onClassChange = evt => onChange(evt.target.value);

  return (
    <Fragment>
      <label htmlFor="classlevel">{translate('character.class-and-level')}</label>
      <select onChange={onClassChange}>
        <EmptyOption translate={translate} />
        {CLASSES_AS_ARRAY.map((it, index) => <option key={`${it}-${index}`} value={it}>{it}</option>)}
      </select>
    </Fragment>
  );
};
