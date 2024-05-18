import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const [lightState, setLightState] = useState(0);

  const changeLight = () => {
    lightState === 2 ? setLightState(0) : setLightState(lightState + 1);
  };

  return (
    <div className='traffic-light-box'>
      <h2>Functional Traffic Light</h2>
      <div className='traffic-light'>
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${lightState === 0 ? 'red' : 'black'}`}></div>
        <div className={`circle ${lightState === 2 ? 'yellow' : 'black'}`}></div>
        <div className={`circle ${lightState === 1 ? 'green' : 'black'}`}></div>
      </div>
      <button className='next-state-button' onClick={changeLight}>
        Next State
      </button>
    </div>
  );
};
