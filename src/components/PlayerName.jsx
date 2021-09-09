import React, { Fragment } from 'react';

export const PlayerName = ({ translate }) => {
  return (
    <Fragment>
      <label htmlFor="playername">{translate('character.player-name')}</label>
      <input
        name="playername"
        placeholder={translate('default.input-empty')} />
    </Fragment>
  );
};
