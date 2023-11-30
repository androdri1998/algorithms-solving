function solution(s) {
  const format = (number) => {
    return number < 10 ? `0${number}` : number;
  };
  const arrayTime = s.split(":");
  const HOURS_INDEX = 0;
  const SECONDS_INDEX = 2;
  const MINUTES_INDEX = 1;

  const period = s.substring(s.length - 2);

  let hours = 0;
  let periodToFill = "AM";
  let hoursMap = new Map();
  for (let index = 0; index < 24; index++) {
    if (hours === 0) {
      hoursMap.set("12AM", "00");
      hours++;
      continue;
    }
    if (hours === 12) {
      hoursMap.set("12PM", "12");
      hours = 1;
      periodToFill = "PM";
      continue;
    }

    hoursMap.set(`${format(hours)}${periodToFill}`, format(index));

    hours++;
  }

  return `${hoursMap.get(`${arrayTime[HOURS_INDEX]}${period}`)}:${
    arrayTime[MINUTES_INDEX]
  }:${arrayTime[SECONDS_INDEX].replace(period, "")}`;
}
