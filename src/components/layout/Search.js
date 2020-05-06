import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) {
      props.setAlerts('Please enter something', 'light');
      return;
    }

    props.setAlerts('', '');
    props.searchUsers(searchTerm);
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
      {props.showClear && (
        <button onClick={props.clearUsers} className="btn-light btn-block">
          Clear
        </button>
      )}
    </div>
  );
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlerts: PropTypes.func.isRequired,
};

export default Search;
