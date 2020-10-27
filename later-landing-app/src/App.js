import React from 'react';
import './App.css';
// import HelloWorld from './components/HelloWorld.js';
// import CounterExample from './components/CounterExample.js';
// import Header from './components/Header.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js'

function App() {
  return (
    // <div className='App'>
      // <Header />
      // <HelloWorld name="Taylor" />
    // </div>
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
