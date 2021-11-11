import React from 'react';
import './App.css';
import Memorytest from './Components/Memorytest'
import Numbertest from './Components/Numbertest'
import Visualtest from './Components/Visualtest'
import Home from './Components/Home'
import Nav from './Components/Nav'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chimpanzee" component={Memorytest} />
          <Route path="/number" component={Numbertest} />
          {/* <Route path="/visual" component={Visualtest} /> */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;
