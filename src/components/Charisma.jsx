import React, { Fragment } from 'react';

export const Charisma = ({ modifier, translate, value }) => (
  <Fragment>
    <div className="score">
      <label>{translate('character.charisma')}</label>
      <div>{value}</div>
    </div>
    <div className="modifier">
      <div>{modifier}</div>
    </div>
  </Fragment>
);
