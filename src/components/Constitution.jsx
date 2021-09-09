import React, { Fragment } from 'react';

export const Constitution = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('constitution')}</label>
      <div>{value}</div>
    </div>
    <div className="modifier">
      <div>{modifier}</div>
    </div>
  </Fragment>
);
