import React, { Component } from "react";

export class App extends Component {
  // Properties => state
  state = {
    fullName: "Vinh Hoang",
    address: "Ngo Quyen",
    counter: 0,
    isDisplayed: true,
  };

  // Methods
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  setDisplayed = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.fullName}</h1>
        {this.state.isDisplayed && <h2>Address: {this.state.address}</h2>}
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increaseCounter}>Increase Counter</button>
        <button onClick={this.decreaseCounter}>Decrease Counter</button>
        <button onClick={this.setDisplayed}>Set Display</button>
      </div>
    );
  }
}

export default App;
