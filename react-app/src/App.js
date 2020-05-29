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
     <header>
       <form id="to-do-form">
        <input type="text" placeholder="What will you do next?"/>
        <button>Add to-do</button>
       </form>
        
      </header>
    );
  }
}

 
export default App;


