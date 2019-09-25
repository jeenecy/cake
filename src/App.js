import React from 'react';
import {Route,Switch,Redirect,Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import List from './components/List'
import Detail from './components/Detail'
import Cart from './components/Cart'
import Login from './components/Login'
function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          {/* <Route path="/list:1" component={List} />
          <Route path="/list:2" component={List} />
          <Route path="/list:3" component={List} />
          <Route path="/list:4" component={List} />
          <Route path="/list:5" component={List} />
          <Route path="/list:6" component={List} /> */}
          {/* <Redirect from="/list" to="list/:1" exact /> */}
          <Route path="/detail" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="home" exact />
        </Switch>

    </div>
  );
}

export default withRouter(App);
