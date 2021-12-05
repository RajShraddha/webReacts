import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.state = {
      ElapsedSeconds: 0
    };
  }

  start() {
    this.setState({
      ElapsedSeconds: this.state.ElapsedSeconds + 1
    });
  }

  componentWillMount() {
    alert("Component Mounted");
  }

  componentDidMount() {
    setInterval(this.start, 1000);
  }

  render() {
    return (
      <div>
        <h3> Time Elapsed {this.state.ElapsedSeconds}</h3>
      </div>
    );
  }
}

export default Timer;
