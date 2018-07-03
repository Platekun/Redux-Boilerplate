import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Heroes from '../heroes';

const history = createBrowserHistory();

const Core = () => (
  <div>
    <Router history={history}>
      <div>
        <h1>Boilerplate app</h1>
        <Switch>
          <Route path="/" exact component={Heroes} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default Core;
