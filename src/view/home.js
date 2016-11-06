import React, { Component } from 'react';

import Schedule from 'component/schedule';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>The Plan</h1>
          <h2>Registration</h2>
        <div className="rego-close" >
          <Schedule track="z" />
        </div>
        <div className="half-width">
          <h2>Techno Falcons</h2>
          <Schedule track="a" />
        </div>
        <div className="half-width">
          <h2>Digital Ravens</h2>
          <Schedule track="b" />
        </div>
        <div className="half-width">
          <h2>Cyber Eagles</h2>
          <Schedule track="c" />
        </div>
      </div>
    );
  }
}

export default Home;
