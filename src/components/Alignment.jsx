import React, { Fragment } from 'react';

export const Alignment = ({ translate }) => (
  <Fragment>
    <label htmlFor="alignment">{translate('character.alignment')}</label>
    <input
      name="alignment"
      placeholder="Lawful Good" />
  </Fragment>
);