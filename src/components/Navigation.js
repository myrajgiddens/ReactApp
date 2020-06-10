import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Navigation() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
  
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function Contact() {
    return (
      <div>
        <h2>Contact</h2>
      </div>
    );
  }