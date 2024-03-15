import { Stopwatch } from './Stopwatch';
import { Timer } from './Timer';

export const App = () => {
  const time1 = Stopwatch(60);
  const time2 = Stopwatch(90);
  const time3 = Stopwatch(7400);

  return (
    <div>
      {time1}
      {time2}
      {time3}
      <Timer duration={2 * 24 * 60 * 60 * 1000} />
    </div>
  );
};
