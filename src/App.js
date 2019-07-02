import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
           <li><Link to="/" className="nav-link">Home</Link></li>
           <li><Link to="/Page1" className="nav-link">Page1</Link></li>
           <li><Link to="/Page2">Page2</Link></li>
          </ul>

          </nav>
          <hr />
          <Route exact path="/" component={Home}/>
          <Route path="/Page1" component={Page1}/>
          <Route path="/Page2" component={Page2}/>
        </div>
      </Router>
    );
  }
}

export default App;
