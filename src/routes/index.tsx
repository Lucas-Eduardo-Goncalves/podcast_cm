import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { Playlists } from '../pages/Playlists';
import { UnicPodcast } from '../pages/UnicPodcast';

import { Profile } from '../pages/Profile';
import { UsersAdmin } from '../pages/UsersAdmin';
import { AddPodcast } from '../pages/AddPodcast';


export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact/>
      <Route path="/home" component={Dashboard}/>
      <Route path="/playlists" component={Playlists}/>

      <Route path="/myprofile" exact component={Profile}/>
      <Route path="/myprofile/users" component={UsersAdmin}/>
      <Route path="/myprofile/addpodcast" component={AddPodcast}/>

      <Route path="/podcast/:id+" component={UnicPodcast} />
    </Switch>
  );
}