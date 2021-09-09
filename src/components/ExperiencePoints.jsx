import React, { Fragment } from 'react';

export const ExperiencePoints = ({ experiencePoints, translate }) => (
  <Fragment>
    <label htmlFor="experiencepoints">{translate('character.experience-points')}</label>
    <span>{experiencePoints}</span>
  </Fragment>
);
