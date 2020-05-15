import React, { Fragment } from 'react';
import Search from '../layout/Search';
import Alert from '../layout/Alert';
import Users from '../users/Users';

const Home = () => (
  <Fragment>
    <Alert />
    <Search />
    <Users />
  </Fragment>
);
export default Home;
