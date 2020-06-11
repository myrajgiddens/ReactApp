import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route path="/" component={App} />
        <Route path="/about" component={Contact} />
      </Router>
    </section>
  );
};

const HomePage = () => {
    return (
      <h3>Home Page</h3>
    );
  };
  
  const Contactpage = () => {
    return (
      <h3>Contact Page</h3>
    );
  };









export default App;