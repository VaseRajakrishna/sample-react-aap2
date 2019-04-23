import React, { Component } from 'react';

import './App.css';

import Person from './Persons/Person';

class App extends Component {
   state={
students:[
  {id:'id1',name:'Raja Krishna',age:24},
  {id:'id2',name:'Mounika',ag3:24},
]
   }
  render() {
    const style={
      background:'indigo',
      color:'white',
      border:'1px solid indigo',
      padding:'10px',
      cursor:'pointer'
    }
    return (
      <div className="App">
      <h1>Sample React app</h1>
      <button style={style}>Switch button</button>
      <Person name={this.state.students[0].name} />
      </div>
    );
  }
}

export default App;
