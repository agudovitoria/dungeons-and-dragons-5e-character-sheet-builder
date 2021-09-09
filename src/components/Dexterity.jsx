import React, { Fragment } from 'react';
import {
  signed
} from '../shared/numberUtils';

export const Dexterity = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('character.dexterity')}</label>
      <div>{signed(value)}</div>
    </div>
    <div className="modifier">
      <div>{signed(modifier)}</div>
    </div>
  </Fragment>
);
