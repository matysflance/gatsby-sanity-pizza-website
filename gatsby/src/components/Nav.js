import React from 'react';
import { Link } from 'gatsby';

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/">Logo</Link>
      </li>
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <li>
        <Link to="/order">Order Ahead!</Link>
      </li>
    </ul>
  </nav>
);
