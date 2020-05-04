import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

NavBar.defaultProps = {
  icon: 'fab fa-github',
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
