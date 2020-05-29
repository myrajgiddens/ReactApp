// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="What will you do next?"/>
            <button type="submit">Add to-do</button>
          </form>
        </header>
      </div>
    );
  }
}

 
export default App;


