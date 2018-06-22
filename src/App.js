import React, { Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import MouseTrackerWO from './components/MouseTrackerWO';
import MouseTrackerW from './components/MouseTrackerW';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Link to="/withoutRenderProps">Mouse Tracker without Render Props</Link>
        </div>
        <div>
          <Link to="/renderProps">Mouse Tracker with Render Props</Link>
        </div>
        <Switch>
          <Route path="/withoutRenderProps" component={MouseTrackerWO} />
          <Route path="/renderProps" component={MouseTrackerW} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
