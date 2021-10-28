import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact/>
      <Route path="/home" component={Dashboard}/>
    </Switch>
  );
}