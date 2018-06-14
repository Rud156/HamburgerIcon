import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addExtraClass: false,
      loadingCount: 1
    };
  }

  toggleClass = () => {
    const { addExtraClass, loadingCount } = this.state;

    this.setState({
      addExtraClass: !addExtraClass,
      loadingCount: loadingCount + 1
    });
  };

  render() {
    const { addExtraClass, loadingCount } = this.state;

    return (
      <div className="centerRoot" onClick={this.toggleClass}>
        <div style={{ position: "relative" }}>
          <div
            className={`hamburger-top ${addExtraClass ? "rotator" : ""} ${
              loadingCount % 4 === 0 ? "loading" : ""
            }`}
          />
          <div
            className={`hamburger-center ${addExtraClass ? "rotator" : ""}  ${
              loadingCount % 4 === 0 ? "loading" : ""
            }`}
          />
          <div
            className={`hamburger-bottom ${addExtraClass ? "rotator" : ""}  ${
              loadingCount % 4 === 0 ? "loading" : ""
            }`}
          />
        </div>
      </div>
    );
  }
}

export default App;
