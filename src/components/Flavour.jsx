import React from 'react';


export const Flavour = () => {
  return (
    <section className="flavor">
      <div className="personality">
        <label htmlFor="personality">Personality</label><textarea name="personality"></textarea>
      </div>
      <div className="ideals">
        <label htmlFor="ideals">Ideals</label><textarea name="ideals"></textarea>
      </div>
      <div className="bonds">
        <label htmlFor="bonds">Bonds</label><textarea name="bonds"></textarea>
      </div>
      <div className="flaws">
        <label htmlFor="flaws">Flaws</label><textarea name="flaws"></textarea>
      </div>
    </section>
  );
};
