import { useTimers } from 'context/ContextTimers';
import { msToTime } from 'helpers/getPadTime';
import { useEffect, useState } from 'react';
import { DeleteTimerModal } from './DeleteTimerModal/DeleteTimerModal';

export const TimerItem = ({ name, timer, id }) => {
  const { delTimer } = useTimers();
  const [timeLeft, setTimeLeft] = useState(timer);
  const [isCounting, setIsCounting] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const time1 = Date.now();
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft(timeLeft =>
          timeLeft >= 1000 ? timeLeft - (Date.now() - time1) : 0
        );
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
    setIsOpenModal(false);
  };
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{msToTime(timeLeft)}</p>
        {isCounting ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={() => setIsOpenModal(true)} type="button">
          Delete
        </button>
      </div>
      <DeleteTimerModal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onSubmit={onDelete}
      />
    </>
  );
};
