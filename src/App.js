import React, { Component } from "react";
import Hamburger from "./components/Hamburger";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerActive: false,
      loadingCount: 1
    };
  }

  toggleClass = () => {
    const { hamburgerActive, loadingCount } = this.state;

    this.setState({
      hamburgerActive: !hamburgerActive,
      loadingCount: loadingCount + 1
    });
  };

  render() {
    const { hamburgerActive, loadingCount } = this.state;

    return (
      <div className="centerRoot" onClick={this.toggleClass}>
        <Hamburger active={hamburgerActive} loading={loadingCount % 4 === 0} />
      </div>
    );
  }
}

export default App;
