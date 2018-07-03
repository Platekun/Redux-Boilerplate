import expect from 'expect';
import df from 'deep-freeze';

import core from './core';
import * as actionTypes from '../../actions/core/action-types';

describe('Core: Reducer', () => {
  it('should return the same state', () => {
    const action = {
      type: 'DUMMY'
    };

    const state = {};

    const actual = core(df(state), df(action));
    expect(actual).toBe(state);
  });

  it('should change something in the state', () => {
    const action = {
      type: actionTypes.RANDOM_ACTION
    };

    const state = {};
    const expectedState = {
      loaded: true
    };

    const actual = core(df(state), df(action));
    expect(actual).toEqual(expectedState);
  });
});
