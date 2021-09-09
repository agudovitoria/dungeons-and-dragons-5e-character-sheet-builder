import React, { Fragment } from 'react';
import {
  signed
} from '../shared/numberUtils';


export const Strength = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('strength')}</label>
      <div>{signed(value)}</div>
    </div>
    <div className="modifier">
      <div>{signed(modifier)}</div>
    </div>
  </Fragment>
);
