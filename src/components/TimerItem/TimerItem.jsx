import { useTimers } from 'context/ContextTimers';
import { msToTime } from 'helpers/getPadTime';
import { useEffect, useState } from 'react';
import { DeleteTimerModal } from '../DeleteTimerModal/DeleteTimerModal';
import { Button, TimerWraper } from './TimerItem.styled';

export const TimerItem = ({ name, timer, id, skin }) => {
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
      <TimerWraper color={skin}>
        <p>{name}</p>
        <p>{msToTime(timeLeft)}</p>
        {isCounting ? (
          <Button onClick={handleStop}>Stop</Button>
        ) : (
          <Button onClick={handleStart}>Start</Button>
        )}
        <Button onClick={() => setIsOpenModal(true)} type="button">
          Delete
        </Button>
      </TimerWraper>
      <DeleteTimerModal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onSubmit={onDelete}
      />
    </>
  );
};
