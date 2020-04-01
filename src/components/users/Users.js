import PropTypes from 'prop-types';
import React from 'react';

import UserItem from './UserItem';

const Users = ({ users, loading }) => {
  const userComponents = users.map((user, index) => <UserItem key={index} user={user} />);

  return <div style={userStyle}>{userComponents}</div>;
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
