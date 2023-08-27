// Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav vertical>
        <NavItem>
          <NavLink to="/audioUpload" activeClassName="active" className="nav-link">
            Upload Audio
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
