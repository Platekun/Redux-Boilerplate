import expect from 'expect';

import * as actions from './action-creators';
import * as actionTypes from './action-types';

describe('Core: Action Creators', () => {
  describe('doSomething', () => {
    it(`should return an action of type ${actionTypes.RANDOM_ACTION}.`, () => {
      const actual = actions.doSomething();

      expect(actual.type).toBe(actionTypes.RANDOM_ACTION);
    });
  });
});
