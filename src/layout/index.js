import React from 'react';

import { Link } from 'react-router';

import { Button, Navbar, Overlay } from "@blueprintjs/core";

export default function Layout(props) {
  return (
    <div>
        <nav className="pt-navbar pt-dark">
          <div className="pt-navbar-group pt-align-left">
            <button className="pt-button pt-minimal">
              <Link to="/">Home</Link>
            </button>
            <span className="pt-navbar-divider"></span>
            <button className="pt-button pt-minimal">
              <Link to="/your-schedule">Your Schedule </Link>
            </button>
          </div>
        </nav>

      <main>
        {props.children}
      </main>
    </div>
  );
};
