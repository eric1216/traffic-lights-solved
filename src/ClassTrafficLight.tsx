import { Component } from 'react';
export class ClassTrafficLight extends Component {
  state = {
    lightState: 0,
  };

  changeLight = () => {
    this.state.lightState === 2
      ? this.setState({ lightState: 0 })
      : this.setState({ lightState: this.state.lightState + 1 });
  };

  render() {
    return (
      <div className='traffic-light-box'>
        <h2>Class Traffic Light</h2>
        <div className='traffic-light'>
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${this.state.lightState === 0 ? 'red' : 'black'}`}></div>
          <div className={`circle ${this.state.lightState === 2 ? 'yellow' : 'black'}`}></div>
          <div className={`circle ${this.state.lightState === 1 ? 'green' : 'black'}`}></div>
        </div>
        <button className='next-state-button' onClick={this.changeLight}>
          Next State
        </button>
      </div>
    );
  }
}
