/*Node Module Imports*/
import React from 'react';
import {Route, Switch} from 'react-router-dom';
/*Page Imports*/
import Home from './pages/Home';
import Landing from './pages/Landing';

const App = () => {
  return (
    <Switch>
      <Route exact path = "/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;