import React from 'react';
import './header.component.sass';

const HeaderComponent = () => (
  <header className="app-header">
    <h1 className="big-blue-text">
      Where your money goes
    </h1>
    <h4 className="smaller-but-by-no-means-tiny-black-text">
      Payments made by Chichester District Council to individual suppliers with a value over £500 made within October.
    </h4>
    <hr className="header-separator" />
  </header>
);

export {
  HeaderComponent,
};
