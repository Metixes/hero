/**
 * Formatting current time
 * @returns formatted string like 10:25
 */
export const getTime = () => {
  const currentDate = new Date();

  let hours = currentDate.getUTCHours();
  let minutes = currentDate.getUTCMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = hours + ":" + minutes;

  return formattedTime;
};
