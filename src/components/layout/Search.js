import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Search extends Component {
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  state = {
    searchTerm: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search users..."
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
            onClick={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Search;
