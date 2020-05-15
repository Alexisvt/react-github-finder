import React, { useReducer } from 'react';

import AlertContext from './alert.context';
import AlertReducer from './alert.reducer';
import { SET_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set alert

  const setAlert = (msg, type) => {
    // @ts-ignore
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
      },
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
