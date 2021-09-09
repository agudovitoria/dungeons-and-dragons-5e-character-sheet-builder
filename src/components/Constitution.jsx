import React, { Fragment } from 'react';
import {
  signed
} from '../shared/numberUtils';

export const Constitution = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('constitution')}</label>
      <div>{signed(value)}</div>
    </div>
    <div className="modifier">
      <div>{signed(modifier)}</div>
    </div>
  </Fragment>
);
