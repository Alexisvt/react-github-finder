import axios from 'axios';
import React, { useReducer } from 'react';

import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../types';
import GitHubContext from './github.context';
import GitHubReducer from './github.reducer';

const GitHubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  // Search Users

  const searchUsers = async (searchTerm) => {
    setLoading();

    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // @ts-ignore
    dispatch({
      type: SEARCH_USERS,
      payload: data.items,
    });
  };

  // clear users
  const clearUsers = () => {
    // @ts-ignore
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // Set loading
  // @ts-ignore
  const setLoading = () => dispatch({ type: SET_LOADING });

  // get user
  const getUser = async (userName) => {
    setLoading();

    const { data } = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // @ts-ignore
    dispatch({
      type: GET_USER,
      payload: data,
    });
  };

  // get user repos
  const getUserRepos = async (userName) => {
    setLoading();

    const { data } = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // @ts-ignore
    dispatch({
      type: GET_REPOS,
      payload: data,
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
