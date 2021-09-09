import React, { Fragment } from 'react';
import {
  signed
} from '../shared/numberUtils';

export const Intelligence = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('character.intelligence')}</label>
      <div>{signed(value)}</div>
    </div>
    <div className="modifier">
      <div>{signed(modifier)}</div>
    </div>
  </Fragment>
);
