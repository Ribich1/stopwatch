import { useTimers } from 'context/ContextTimers';
import { TimerItem } from '../TimerItem/TimerItem';
import { List } from './TimerList.styled';

export const TimerList = () => {
  const { timers } = useTimers();
  return (
    <List>
      {timers.map(timer => (
        <TimerItem key={timer.id} {...timer} />
      ))}
    </List>
  );
};
