import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
