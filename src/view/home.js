import React, { Component } from 'react';

import Schedule from 'component/schedule';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>The Plan</h1>

        <div className="half-width">
          <h2>Digital Demons</h2>
          <Schedule track="a" />
        </div>
        <div className="half-width">
          <h2>Terrific Tech</h2>
          <Schedule track="b" />
        </div>
      </div>
    );
  }
}

export default Home;
