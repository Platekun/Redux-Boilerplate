import * as actionTypes from '../../actions/core/action-types';

const INITIAL_STATE = {
  loaded: false
};

export const NAME = 'CORE';

export default (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.RANDOM_ACTION:
      return {
        ...prevState,
        loaded: true
      };

    default:
      return prevState;
  }
};
