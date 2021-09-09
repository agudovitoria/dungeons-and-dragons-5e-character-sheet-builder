import React, { Fragment } from 'react';
import { CLASSES_AS_ARRAY } from '../engine/classes';
import { EmptyOption } from './EmptyOption';

export const ClassAndLevel = ({ translate }) => {
  return (
    <Fragment>
      <label htmlFor="classlevel">{translate('character.class-and-level')}</label>
      <select name="class">
        <EmptyOption translate={translate} />
        {CLASSES_AS_ARRAY.map((it, index) => <option key={`${it}-${index}`} value={it}>{it}</option>)}
      </select>
    </Fragment>
  );
};
