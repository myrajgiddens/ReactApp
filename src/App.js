import React, { Component } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {v1 as uuid} from "uuid";


import 'bootstrap/dist/css/bootstrap.min.css';
// import uuid from 'uuid';
class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleChange= (e)=>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit= (e) =>{
    e.preventDefault();

  const newItem = {
    id:this.state.id,
    title:this.state.item
  };

  const updatedItems = [...this.state.items, newItem];

  this.setState({
    items:updatedItems,
    item:'',
    id:uuid(),
    editItem:false,
  });
  };
  clearList = () => {
    this.setState({
      items:[]
    });
  };
  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item =>item.id !== id)
    this.setState({
      items:filteredItems
    });
  };

  handleEdit = id=>{
   const filteredItems = this.state.items.filter(item =>
    item.id !== id);
  
    const selectedItem = this.state.items.find(item => item.id===id);
    console.log(selectedItem);
    
    this.setState({
      items:filteredItems,
      item: selectedItem.title,
      editItem:true,
      id: id
    });
  };

 
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </Router>
        <div className="container">
          <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input
            </h3> 
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
          
          
              <TodoInput item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              />
              <TodoList items={this.state.items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}






export default App;
