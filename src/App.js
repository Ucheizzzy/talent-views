import { useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ContentDescription from './components/contentDescription';

import Home from './pages/home';
import Login from './pages/login';
import Watch from './pages/watch';
import axios from 'axios'
import { useState } from 'react';
import Register from './pages/register';
import { AuthContext } from './authContext/authContext'

function App() {

  const { user } = useContext(AuthContext)
  return (
    <>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" >
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route exact path="/register" >
          { !user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/signin" >
          { !user ? <Login /> : <Redirect to="/"/>}
        </Route>
        {user && (
        <>
        <Route exact path="/movies" >
          <Home type='Movies'/>
        </Route>
        <Route exact path="/series" >
          <Home type='Series'/>
        </Route>
        <Route exact path="/content/watch/:id" component={Watch} />
        <Route exact path="/content/:id" component={ContentDescription} />
        </>
        )}
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
