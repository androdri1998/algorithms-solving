const convertNumberIntoStringToMinutes = (m) => {
  const mString = m.toString();

  let clock = "o' clock";
  if(mString === "00" || mString === "0") {
    return clock;
  }

  const exceptions = {
    "00": "o' clock",
    "0": "o' clock",
    "15": "quarter",
    "30": "half",
  }

  const dozens = {
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "fourty",
    "50": "fifty",
  };

  const units = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
  }

  const unit = mString[1];
  let isException = false;
  if(exceptions[mString]) {
    clock = exceptions[mString];
    isException = true;
  } else if(dozens[mString]) {
    clock = dozens[mString];
  } else if(units[mString]) {
    clock = units[mString];
  } else {
    const dozen = parseInt(mString) - parseInt(unit);
    const dozenString = dozens[dozen];
    const unitString = units[unit];
    clock = `${dozenString} ${unitString}`;
  }

  const clockToReturn = isException
    ?clock
    :`${clock} ${parseInt(mString) === 1
                  ?'minute' 
                  :'minutes'}`;

  return clockToReturn;
}

const convertNumberIntoStringToHour = (m) => {
  const mInteger = parseInt(m);
  const hours = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
  }

  const hour = hours[mInteger];
  return hour;
}

const checkHConstraints = (h) => {
  const FIRST_HOUR = 1;
  const LAST_HOUR = 12;
  if (h >= FIRST_HOUR && h <= LAST_HOUR) {
    return true;
  }

  return false;
}

const checkMConstraints = (m) => {
  const INIT_MINUTE = 0;
  const LAST_MINUTE = 60;
  if (m >= INIT_MINUTE && m < LAST_MINUTE) {
    return true;
  }

  return false;
}

const getStringHour = (h, m) => {
  if(checkHConstraints(h) && checkMConstraints(m)) {
    let minuteStringToShow = '';
    let hourStringToShow = '';
    const HALF_MINUTE = 30;
    if(m <= HALF_MINUTE) {
      const minutesString = convertNumberIntoStringToMinutes(m);
      if(minutesString === "o' clock") {
        minuteStringToShow = `${minutesString}`;
      } else {
        minuteStringToShow = `${minutesString} past`;
      }
    } else if(m > HALF_MINUTE) {
      const MINUTES_IN_ONE_HOUR = 60;
      const minutesRemains = MINUTES_IN_ONE_HOUR - m;
      const minutesString = convertNumberIntoStringToMinutes(minutesRemains);
      minuteStringToShow = `${minutesString} to`;
    }

    if(minuteStringToShow === "o' clock") {
      const hourString = convertNumberIntoStringToHour(h);
      hourStringToShow = `${hourString} ${minuteStringToShow}`;
    } else {
      let hourString = '';
      if(m <= HALF_MINUTE) {
        hourString = convertNumberIntoStringToHour(h);
      } else if(m > HALF_MINUTE) {
        const nextHour = h + 1;
        hourString = convertNumberIntoStringToHour(nextHour);
      }
      hourStringToShow = `${minuteStringToShow} ${hourString}`;
    }

    return hourStringToShow;
  } else {
    throw new Error("Incorrect Parameters!");
  }
}

const getHourFormat12Hours = (hour) => {
  const LIMIT_HOUR = 12;
  if(hour === 0) {
    return LIMIT_HOUR;
  }

  const hourRemains = hour > LIMIT_HOUR ? hour - LIMIT_HOUR: hour;
  return hourRemains;
}

const currentDate = new Date();
const hour = getHourFormat12Hours(currentDate.getHours());
const minutes = currentDate.getMinutes();
console.log(getStringHour(hour, minutes));