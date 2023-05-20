import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthScreen from './modules/auth/AuthScreen';
import Dashboard from './modules/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/' component={Dashboard} exact />
        <Route path='/login' component={AuthScreen} />
      </Switch>
    </Router>
  );
}
