import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import { UnicPodcast } from '../pages/UnicPodcast';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact/>
      <Route path="/home" component={Dashboard}/>
      <Route path="/myprofile" component={Profile}/>

      <Route path="/podcast/:id+" component={UnicPodcast} />
    </Switch>
  );
}