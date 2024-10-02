import React from 'react';
import Navbar from './components/Navbar';
import '../src/components/Components_css/App.css';
import Home from '../src/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../src/pages/About'; // this is the about page 
import Events from '../src/pages/Events';// this is the event page
import Projects from '../src/pages/Projects'; // this is the projects page


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Events' component={Events} />
          <Route path='/Projects' component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
