import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class UserItem extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    const { avatar_url, login, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img src={avatar_url} alt={login} className="round-img" style={{ width: '60px' }} />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
