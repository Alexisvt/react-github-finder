import React, { useReducer } from 'react';

import AlertContext from './alert.context';
import AlertReducer from './alert.reducer';
import { SET_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set alert

  const setAlerts = (msg, type) => {
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
        alert: state.alert,
        setAlerts,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
