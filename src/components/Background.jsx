import React, { Fragment } from 'react';

export const Background = ({ translate }) => (
  <Fragment>
    <label htmlFor="background">{translate('character.background')}</label>
    <input
      name="background"
      placeholder={translate('default.input-empty')} />
  </Fragment>
);
