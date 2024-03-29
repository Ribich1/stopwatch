import { useTimers } from 'context/ContextTimers';
import { msToTime } from 'helpers/getPadTime';
import { useEffect, useState } from 'react';

export const TimerItem = ({ name, timer, id }) => {
  const { delTimer } = useTimers();
  const [timeLeft, setTimeLeft] = useState(timer);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft(timeLeft => (timeLeft >= 1000 ? timeLeft - 1000 : 0));
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(5);
    setIsCounting(true);
  };
  const handleStop = () => {
    setIsCounting(false);
  };

  const onDelete = () => {
    delTimer(id);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{msToTime(timeLeft)}</p>
      {isCounting ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={onDelete} type="button">
        Delete
      </button>
    </div>
  );
};
