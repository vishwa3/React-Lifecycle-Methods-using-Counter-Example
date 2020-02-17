import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    console.log("-----------------------------------");
    super(props);
    this.state = {
      counter: 0,
      seed: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  componentDidMount() {
    console.log("component did mount ");
    console.log("-----------------------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nxtprops", nextProps);
    console.log("nxtState", nextState);
    /*   if (nextProps.toggle === true || nextProps.toggle === false) {
      return false;
    } */
    if (this.props.toggle !== nextProps.toggle) {
      return false;
    }
    return true;
  }

  static getDerivedStateFromProps(nextprops, prevState) {
    if (nextprops.seed && prevState.seed !== nextprops.seed) {
      return {
        seed: nextprops.seed,
        counter: nextprops.seed
      };
    }
    return null;
  }

  render() {
    console.log("RENder");
    console.log("-----------------------------------");
    return (
      <div className="jumbotron center">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter : {this.state.counter}</div>
      </div>
    );
  }

  componentDidUpdate(prevprops, prevState, snapshot) {
    console.log("component did update");
    console.log("-----------------------------------");
    console.log("sta", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("-----------------------------------");
  }
}

export default Counter;
