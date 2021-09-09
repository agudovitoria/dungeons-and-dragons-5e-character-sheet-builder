import React from 'react';

export const OtherProfs = ({ translate }) => (
  <div className="otherprofs box textblock">
    <label htmlFor="otherprofs">{translate('character.other-profs')}</label>
    <textarea name="otherprofs"></textarea>
  </div>
);
