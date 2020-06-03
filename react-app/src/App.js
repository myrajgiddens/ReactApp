// import React from 'react';
// import logo from './logo.svg';
import './App.css';


import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import ListItem from './ListItems'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       currentItem: {
//         text: '',
//         key: ''
//       }
//     }
//     this.handleInput = this.handleInput.bind(this);
//     this.addItem = this.addItem.bind(this);
//   }
//   handleInput(e) {
//     this.setState({
//       currentItem: {
//         text: e.target.value,
//         key: Date.now()
//       }
//     })
//   }
//   addItem(e) {
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     console.log(newItem);
    
//     if (newItem.text !== "") {
//       const newItems = [...this.state.items, newItems];
//       this.setState({
//         items: newItems,
//         currentItem: {
//           text: '',
//           key: ''
//         }
//       })
//     }


//   }
//   render() {
//     return ( <
//       div className = "App" >
//       <
//       header >
//       <
//       form id = "to-do-form"
//       onSubmit = {
//         this.addItem
//       } >
//       <
//       input type = "text"
//       placeholder = "What will you do next?"
//       value = {
//         this.state.currentItem.text
//       }
//       onChange = {
//         this.handleInput
//       }
//       /> <
//       button type = "submit" > Add to - do </button> <
//         /form> <
//         /header> <
//         listItem > < /listItem> <
//         /div>
//     );
//   }
// }


// export default App;





import './App.css';

import ListItems from './ListItems'
// import {Link} from 'react-router';




class App extends React.Component {

  constructor(props){

    super(props);

    this.state = {

      items:[],

      currentItem:{

        text:'',

        key:''

      }

    }

    this.addItem = this.addItem.bind(this);

    this.handleInput = this.handleInput.bind(this);

    this.deleteItem = this.deleteItem.bind(this);

    this.setUpdate = this.setUpdate.bind(this);

  }

  addItem(e){

    e.preventDefault();

    const newItem = this.state.currentItem;
    console.log(ListItem);

    if(newItem.text !==""){

      const items = [...this.state.items, newItem];

    this.setState({

      items: items,

      currentItem:{

        text:'',

        key:''

      }

    })

    }

  }

  handleInput(e){

    this.setState({

      currentItem:{

        text: e.target.value,

        key: Date.now()

      }

    })

  }

  deleteItem(key){

    const filteredItems= this.state.items.filter(item =>

      item.key!==key);

    this.setState({

      items: filteredItems

    })



  }

  setUpdate(text,key){

    console.log("items:"+this.state.items);

    const items = this.state.items;

    items.map(item=>{      

      if(item.key===key){

        console.log(item.key +"    "+key)

        item.text= text;

      }

    })

    this.setState({

      items: items

    })

    

   

  }

 render(){

  return (

    <div className="App">

      <header>

        <form id="to-do-form" onSubmit={this.addItem}>

          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>

          <button type="submit">Add</button>

        </form>

        <p>{this.state.items.text}</p>

        

          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>

        

      </header>

    </div>

  );

 }

}





export default App;