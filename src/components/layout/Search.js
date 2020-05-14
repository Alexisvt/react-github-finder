import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';

import GitHubContext from '../../context/github/github.context';
import AlertContext from '../../context/alert/alert.context';

const Search = () => {
  const { searchUsers, clearUsers, users } = useContext(GitHubContext);
  const { setAlerts } = useContext(AlertContext);

  const [searchTerm, setSearchTerm] = useState('');

  const showClear = users.length ? true : false;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) {
      setAlerts('Please enter something', 'light');
      return;
    }

    setAlerts('', '');
    searchUsers(searchTerm);
    setSearchTerm('');
  };

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search users..."
          value={searchTerm}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          onClick={onSubmit}
        />
      </form>
      {showClear && (
        <button onClick={clearUsers} className="btn-light btn-block">
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlerts: PropTypes.func.isRequired,
};

export default Search;
