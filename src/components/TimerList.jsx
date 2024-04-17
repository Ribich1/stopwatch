import { useTimers } from 'context/ContextTimers';
import { TimerItem } from './TimerItem/TimerItem';

export const TimerList = () => {
  const { timers } = useTimers();
  return (
    <ul>
      {timers.map(timer => (
        <TimerItem key={timer.id} {...timer} />
      ))}
    </ul>
  );
};
