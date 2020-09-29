
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { AddForm } from '../components/AddFotm';
import { Login  } from '../pages/Login';
import {Admin} from './Admin';

export const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={ Login }/>
      <Route path="/admin" component={ Admin }/>
      <Route exact path="/" component={ AddForm }/>



    </Switch>
  )
};