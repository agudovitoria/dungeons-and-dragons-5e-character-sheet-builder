import React, { Fragment } from 'react';
import {
  signed
} from '../shared/numberUtils';

export const Charisma = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('character.charisma')}</label>
      <div>{signed(value)}</div>
    </div>
    <div className="modifier">
      <div>{signed(modifier)}</div>
    </div>
  </Fragment>
);
