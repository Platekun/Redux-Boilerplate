import { combineReducers } from 'redux';

import core, { NAME as CORE } from './core';

export default combineReducers({
  [CORE]: core
});
