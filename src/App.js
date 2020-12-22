import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing';

const App = () => {
  return (
     <Switch>
       <Route exact path = "/">
         <Landing />
        </Route>
      </Switch>
  );
}

export default App;
