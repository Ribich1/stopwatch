import { useEffect, useState } from 'react';

export const Stopwatch = (time ) => {
  const [seconds, setSeconds] = useState(time);

  const hoursString = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minutesString = String(Math.floor(seconds / 60) % 60).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  useEffect(() => {
    setInterval(() => {
      setSeconds(s => Math.max(s - 1, 0));
    }, 1000);
  }, []);

  return (
    <div>
      {hoursString}:{minutesString}:{secondsString}
    </div>
  );
};
