import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Antonio" age = "32"/>
        <Person name="Max" age="28">My Hobbies: Racing </Person>
        <Person name="Manu" age="29"/>
      </div>
    );
    // The code above is JSX code that gets compiled to the JS code below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
