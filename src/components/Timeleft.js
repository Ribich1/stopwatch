import { msToTime } from 'helpers/getPadTime';
import { useState, useEffect } from 'react';

export const Timeleft = ({ duration, name, handleDelete, index }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
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
  const handleReset = () => {
    //   setIsCounting(false);
    handleDelete(index);
    //   setTimeLeft(5);
  };

  return (
    <div>
      <div>
        <span>{name}</span> <br />
        <span>{msToTime(timeLeft)}</span>
      </div>
      <div>
        {isCounting ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Delete</button>
      </div>
    </div>
  );
};
