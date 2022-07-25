import React from 'react';
import './Style.css';

const Navbar = () => (
  <div className="navbar">
    <div className="nav-title">
      <h1>Math Magicians</h1>
    </div>
    <div className="nav-links">
      <a className="link1" href="/">Home</a>
      <a className="link2" href="/Calculator">Calculator</a>
      <a className="link" href="/Quotes">Quote</a>
    </div>
  </div>
);

export default Navbar;
