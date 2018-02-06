import React from 'react';
import './NavItem.css';

const NavItem = ({ navItem }) => (
  <div className="Nav-item">
    <a href="">
      {navItem.toUpperCase()}
    </a>
  </div>
)

export default NavItem;