import React, { Fragment } from 'react';

export const Dexterity = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('character.dexterity')}</label>
      <div>{value}</div>
    </div>
    <div className="modifier">
      <div>{modifier}</div>
    </div>
  </Fragment>
);
