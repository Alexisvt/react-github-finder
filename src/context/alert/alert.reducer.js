import { SET_ALERT } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
