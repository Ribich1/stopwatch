import { getPadTime } from 'helpers/getPadTime';
import { useState, useEffect } from 'react';

export const Timeleft = ({duration,name}) => {
  const [timeLeft, setTimeLeft] = useState((duration));
  const [isCounting, setIsCounting] = useState(false);

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft(timeLeft => (timeLeft >= 1 ? timeLeft - 1 : 0));
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
    setIsCounting(false);
    setTimeLeft(5);
  };

  return (
    <div>
      <div>
        <span>{name}</span> <br />
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div>
        {isCounting ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
