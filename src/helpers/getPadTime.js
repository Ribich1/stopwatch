const getPadTime = time => time.toString().padStart(2, '0');

export const timerMs = timer => {
  const splitTimer = timer.split(':');
  const hours = Number(splitTimer[0] * 60000 * 60);
  const minutes = Number(splitTimer[1] * 60000);
  const seconds = Number(splitTimer[2] * 1000);
  return hours + minutes + seconds;
};

export const msToTime = (timer) => {
    const seconds = getPadTime(String(Math.floor((timer / 1000) % 60)));
    const minutes = getPadTime(String(Math.floor((timer / 1000/60) % 60)));
    const hours = getPadTime(String(Math.floor((timer / 1000 / 60 / 60) % 60)));
    return `${hours}:${minutes}:${seconds}`
}