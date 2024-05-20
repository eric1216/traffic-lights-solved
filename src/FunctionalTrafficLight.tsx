import { useState } from 'react';

const arrColors = ['red', 'yellow', 'green'];

export const FunctionalTrafficLight = () => {
  const [lightState, setLightState] = useState(0);

  const changeLight = () => {
    const newColorIndexValue = lightState === 0 ? arrColors.length - 1 : lightState - 1;
    setLightState(newColorIndexValue);
  };

  return (
    <div className='traffic-light-box'>
      <h2>Functional Traffic Light</h2>
      <div className='traffic-light'>
        {/* Background color can be black | yellow | red | green */}
        {arrColors.map((color) => (
          <div className={`circle ${lightState === arrColors.indexOf(color) ? color : 'black'}`}></div>
        ))}
      </div>
      <button className='next-state-button' onClick={changeLight}>
        Next State
      </button>
    </div>
  );
};
