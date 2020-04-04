import React from 'react';
import Home from './comps/Home';
import User from './comps/User';
import AddContact from './comps/AddContact';
import UpdateContact from './comps/UpdateContact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/add' component={AddContact}/>
        <Route path='/edit/:id' component={UpdateContact}/>
        {/* <Route exact path='/:id' component={User}/> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
