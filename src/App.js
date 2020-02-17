import React from "react";
import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    console.log("App constr");
    super(props);
    this.state = { mount: true, toggle: true, seed: 40 };
  }

  mountCounter = () => {
    console.log("mount");
    this.setState({ mount: true });
  };

  unMountCounter = () => {
    console.log("unmount");
    this.setState({ mount: false });
  };

  toggler = () => {
    console.log("toggler");
    this.setState({ toggle: !this.state.toggle });
  };

  seedGenerator = () =>
    this.setState({ seed: Number.parseInt(Math.random() * 100) });

  render() {
    console.log("App render");
    return (
      <div>
        {this.state.mount && (
          <Counter toggle={this.state.toggle} seed={this.state.seed} />
        )}
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unMountCounter} disabled={!this.state.mount}>
          Unmount Counter
        </button>
        <button onClick={this.toggler}>Toggler</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
      </div>
    );
  }
  componentDidUpdate(prevprops, prevState, snapshot) {
    console.log("App didUpdate");
    console.log("-----------------------------------");
  }

  componentDidMount() {
    console.log("App didMount");
    console.log("-----------------------------------");
  }
}

export default App;
