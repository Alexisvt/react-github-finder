import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = ({ users, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          {users.map((user, index) => (
            <UserItem key={index} user={user} />
          ))}
        </div>
      )}
    </Fragment>
  );
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
