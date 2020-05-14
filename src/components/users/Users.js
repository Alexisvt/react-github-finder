import React, { Fragment, useContext } from 'react';

import GitHubContext from '../../context/github/github.context';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const { users, loading } = useContext(GitHubContext);

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

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
