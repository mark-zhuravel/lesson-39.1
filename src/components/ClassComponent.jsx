import React, { Component } from 'react';
import './ClassComponent.css';  

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,  // Инициализация состояния
    };
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-class">
        <h3>Счётчик: {this.state.count}</h3>
        <button onClick={this.increment}>Увеличить</button>
        <button onClick={this.decrement}>Уменьшить</button>
      </div>
    );
  };
};

export default CounterClass;