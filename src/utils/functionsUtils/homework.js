export const timeUntil90Minutes = (startTime, multiplier = 90) => {
  const endDateTime = new Date(startTime + multiplier * 60 * 1000);
  const currentDateTime = new Date();

  if (currentDateTime > endDateTime) {
    return "00:00";
  }

  const timeDifference = new Date(endDateTime - currentDateTime);
  const hours = timeDifference.getUTCHours();
  const minutes = timeDifference.getUTCMinutes();
  const seconds = timeDifference.getUTCSeconds();

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0",
    )}:${String(seconds).padStart(2, "0")}`;
  } else {
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
};

export const timeUntilEndOfDay = (startTime, multiplier = 90) => {
  const endOfDayDateTime = new Date(startTime + multiplier * 1000 + 24 * 60 * 60 * 1000);
  const currentDateTime = Date.now();

  const timeDifference = new Date(endOfDayDateTime - currentDateTime);

  const hours = timeDifference.getUTCHours();
  const minutes = timeDifference.getUTCMinutes();
  const seconds = timeDifference.getUTCSeconds();

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
    seconds,
  ).padStart(2, "0")}`;
};
