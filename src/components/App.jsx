import { useState } from 'react';
import { Timeleft } from './Timeleft';
import { nanoid } from 'nanoid';

export const App = () => {
  const [arrTimer, setArrTimer] = useState([]);
  const [time, setTime] = useState(0);
  const [nameTimer, setNameTimer] = useState('Noname');

  const handleAddTimer = () => {
    setArrTimer([
      ...arrTimer,
      { duration: time, name: nameTimer, indx: nanoid() },
    ]);
    setTime(0);
    setNameTimer('Noname');
  };
  console.log(arrTimer);

  const handleDeleteTimer = i => {
    setArrTimer(arrTimer.filter(a => a.indx !== i));
    // setArrTimer(arrTimer.splice(i, 1));
    console.log('btn delete');
    console.log('i', i);
  };

  return (
    <div>
      <input value={time} onChange={e => setTime(e.target.value)} />
      <input value={nameTimer} onChange={e => setNameTimer(e.target.value)} />
      <button onClick={handleAddTimer}>Add timer</button>
      <ul>
        {arrTimer.map(e => (
          <li key={e.indx}>
            <Timeleft
              duration={e.duration}
              name={e.name}
              handleDelete={handleDeleteTimer}
              index={e.indx}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
