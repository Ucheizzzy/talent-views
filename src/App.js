import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Watch from './pages/watch';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" >
          <Login />
        </Route>
        <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/home/watch" >
          <Watch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
