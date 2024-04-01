const getPadTime = time => time.toString().padStart(2, '0');

export const timerMs = timer => {
  const splitTimer = timer.split(':');
  const hours = Number(splitTimer[0] * 60000 * 60);
  const minutes = Number(splitTimer[1] * 60000);
  const seconds = Number(splitTimer[2] * 1000);
  return hours + minutes + seconds;
};

export const msToTime = timer => {
  const seconds = getPadTime(String(Math.floor((timer / 1000) % 60)));
  const minutes = getPadTime(String(Math.floor((timer / 1000 / 60) % 60)));
  const hours = getPadTime(String(Math.floor((timer / 1000 / 60 / 60))));
  const days = getPadTime(String(Math.floor(hours/24)));

  return `${days}:${getPadTime(hours-days*24)}:${minutes}:${seconds}`;
  // return `${hours}:${minutes}:${seconds}`;
};
