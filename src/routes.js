import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RotaPrivada from './components/RotaPrivada';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

export const Roteamento = () => (
  <Switch>
    <RotaPrivada path="/" component={HomePage} exact />
    <Route path="/login" component={LoginPage} />
    <Route path="*" component={ErrorPage} />
    {/* <Route path="/categoria/:produtoId" component={ProductPage} /> */}

  </Switch>
);

export default Roteamento;