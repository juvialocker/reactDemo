import React from 'react';
import './App.css';
import Home from './home';
import Init from './init';
import LoginForm from './loginForm';
import Lifecycle from './lifecycle';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route path="/init" component={Init} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/lifecycle" component={Lifecycle} />
      </div>
    </Router>
  );
}

export default App;
