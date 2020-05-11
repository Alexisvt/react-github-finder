import axios from 'axios';
import React, { useReducer } from 'react';

import { SEARCH_USERS, SET_LOADING } from '../types';
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

    setLoading()

    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: data.items
    });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <GitHubContext.Provider value={{
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    searchUsers
  }}
  >
    {props.children}
  </GitHubContext.Provider>
}

export default GitHubState;


