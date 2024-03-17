import { useState } from 'react';
import { Timeleft } from './Timeleft';

export const App = () => {
  const [arrTimer, setArrTimer] = useState([]);

  const handleAddTimer = () => {
    setArrTimer([...arrTimer, <Timeleft duration="150" name="name1" />]);
  };
  console.log(arrTimer);

  return (
    <div>
      <button onClick={handleAddTimer}>Add timer</button>
      <ul>
        {arrTimer.map((e, i) => (
          <li key={i + 1}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
