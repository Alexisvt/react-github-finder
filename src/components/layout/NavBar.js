import PropTypes from 'prop-types';
import React from 'react';

export const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
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
