import React, { Component } from 'react';
import './App.css';
import Burger from './Burger/Burger';

class App extends Component {
  state = {
    burgers: [
      { type: "chicken", price: 3.80 },
      { type: "beef", price: 5.50 },
      { type: "chicken", price: 5.30 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Burger!</h1>
        <Burger type={this.state.burgers[0].type} price={this.state.burgers[0].price} />
        <Burger type={this.state.burgers[1].type} price={this.state.burgers[1].price} />
        <Burger type={this.state.burgers[2].type} price={this.state.burgers[2].price} />
      </div>
    );
  }
}

export default App;
