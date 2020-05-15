import React, { useContext, useState } from 'react';

import GitHubContext from '../../context/github/github.context';
import AlertContext from '../../context/alert/alert.context';

const Search = () => {
  const { searchUsers, clearUsers, users } = useContext(GitHubContext);
  const { setAlert } = useContext(AlertContext);

  const [searchTerm, setSearchTerm] = useState('');

  const showClear = users.length ? true : false;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) {
      setAlert('Please enter something', 'light');
      return;
    }

    setAlert('', '');
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

export default Search;
