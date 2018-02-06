import React from 'react';
import NavItem from '../NavItem/NavItem';
import './Navbar.css';

const Navbar = ({ navItems }) => (
  <div className="Navbar">
    { navItems.map((item, index) => <NavItem key={index} navItem={item} />) }
  </div>
)

export default Navbar;