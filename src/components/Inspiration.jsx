import React from 'react';

export const Inspiration = ({ translate, value }) => (
  <div className="inspiration box">
    <div className="label-container">
      <label htmlFor="inspiration">{translate('character.inspiration')}</label>
    </div>
    <input
      checked={value}
      name="inspiration"
      readOnly
      type="checkbox" />
  </div>
);
