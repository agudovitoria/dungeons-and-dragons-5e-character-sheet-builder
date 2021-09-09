import React, { Fragment } from 'react';

export const Strength = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('strength')}</label>
      <div>{value}</div>
    </div>
    <div className="modifier">
      <div>{modifier}</div>
    </div>
  </Fragment>
);
