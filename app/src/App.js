import React, { Component } from 'react';
import './App.css';
import Burger from './Burger/Burger';
import Radium from 'radium';

class App extends Component {

  state = {
    burgers: [
      { id:"qwer", type: "veggie", price: 3.80 },
      { id:"asdf", type: "beef", price: 5.50 },
      { id:"zxcv", type: "chicken", price: 5.30 }
    ],
    showBurgers: false
  }

  typeChangeHandler = ( event, id ) => {
    const burgerIndex = this.state.burgers.findIndex(b => {
      return b.id === id;
    });

    const burger = {
      ...this.state.burgers[burgerIndex]
    };

    burger.name = event.target.value;

    const burgers = [...this.state.burgers];
    burgers[burgerIndex] = burger;

    this.setState({burgers: burgers});
  }

  deleteBurgerHandler = (burgerIndex) => {
    const burgers = [...this.state.burgers];
    burgers.splice(burgerIndex, 1);
    this.setState({burgers: burgers});
  }

  toggleBurgersHandler = (event) => {
    const doesShow = this.state.showBurgers;
    this.setState({
      showBurgers: !doesShow
    });
  }

  render() {

    const style = {
    backgroundColor: 'green',
    border: '2.5px solid black',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen'
    }
    };

    const assignesClasses = [];
    if (this.state.burgers.length <= 2) {
      assignesClasses.push('red');
    }
    if (this.state.burgers.length <= 1) {
      assignesClasses.push('bold');
    }

    let burgers = null;

    if (this.state.showBurgers) {
      burgers = (
        <div>
        {this.state.burgers.map((burger, index) => {
          return <Burger
            click={() => this.deleteBurgerHandler(index)}
            type={burger.type}  
            price={burger.price}
            key={burger.id}
            changed={(event) => this.typeChangeHandler(event, burger.id)} />
        })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'tomato'
      }
    }

    return (
      <div className="App">
        <h1 className={assignesClasses.join(' ')}>Hello Burger!</h1>

        <button
        onClick={this.toggleBurgersHandler}
        style={style}
        >Toggle burgers</button>

        {burgers}

      </div>

    );
  }
};

export default Radium(App);
