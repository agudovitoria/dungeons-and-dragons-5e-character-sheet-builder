import React, { Fragment } from 'react';
import { ALIGNMENTS_AS_ARRAY } from '../engine/alignments';
import { EmptyOption } from './EmptyOption';

export const Alignment = ({
  onChange,
  translate
}) => {
  const onAlignmentChange = evt => onChange(evt.target.value);
  return (
    <Fragment>
      <label htmlFor="alignment">{translate('character.alignment')}</label>
      <select onChange={onAlignmentChange}>
        <EmptyOption translate={translate} />
        {ALIGNMENTS_AS_ARRAY.map((it, index) => <option key={`${it}-${index}`} value={it}>{it}</option>)}
      </select>
    </Fragment>
  );
};