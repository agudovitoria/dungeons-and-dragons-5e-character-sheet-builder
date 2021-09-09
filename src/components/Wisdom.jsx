import React, { Fragment } from 'react';

export const Wisdom = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('character.wisdom')}</label>
      <div>{value}</div>
    </div>
    <div className="modifier">
      <div>{modifier}</div>
    </div>
  </Fragment>
);
