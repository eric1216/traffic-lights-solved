import { Component } from 'react';

const arrColors = ['red', 'yellow', 'green'];
export class ClassTrafficLight extends Component {
  state = {
    lightState: 0,
  };

  changeLight = () => {
    const newColorIndexValue = this.state.lightState === 0 ? arrColors.length - 1 : this.state.lightState - 1;
    this.setState({ lightState: newColorIndexValue });
  };

  render() {
    return (
      <div className='traffic-light-box'>
        <h2>Class Traffic Light</h2>
        <div className='traffic-light'>
          {/* Background color can be black | yellow | red | green */}
          {arrColors.map((color) => (
            <div className={`circle ${this.state.lightState === arrColors.indexOf(color) ? color : 'black'}`}></div>
          ))}
        </div>
        <button className='next-state-button' onClick={this.changeLight}>
          Next State
        </button>
      </div>
    );
  }
}
