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
    var timing = setInterval(this.start, 1000);
  }

  // componentWillUnmount(){

  //   clearInterval();

  // }

  render() {
    return (
      <div>
        <h3> Time Elapsed {this.state.ElapsedSeconds}</h3>
        <button onClick={this.componentWillUnmount}>stop timer</button>
      </div>
    );
  }
}

export default Timer;
