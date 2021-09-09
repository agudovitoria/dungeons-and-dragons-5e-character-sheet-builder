import React, { Fragment } from 'react';

export const Intelligence = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('character.intelligence')}</label>
      <div>{value}</div>
    </div>
    <div className="modifier">
      <div>{modifier}</div>
    </div>
  </Fragment>
);
