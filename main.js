console.log('----LESSON-7-----');
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

function deepEqual(object1, object2) {
  const props1 = Object.getOwnPropertyNames(object1);
  const props2 = Object.getOwnPropertyNames(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i++) {
    const prop = props1[i];
    const both =
      typeof object1[prop] === 'object' && typeof object2[prop] === 'object';

    if (
      (!both && object1[prop] !== object2[prop]) ||
      (both && !deepEqual(object1[prop], object2[prop]))
    ) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

const daysInMonth = 30;
const dayOfWeek = 7;

const getCalendarMonth = (daysInMonth, dayOfWeek) => {
  let day = daysInMonth - dayOfWeek + 1;
  let dates = [];
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      try {
        if (dayOfWeek > 7) throw ' greater than days in a week';
      } catch (err) {
        return 'value' + err;
      }
      try {
        if (daysInMonth < 28) throw ' is less than days in a month';
        if (daysInMonth > 31) throw ' is greater than days in a month';
      } catch (err) {
        return 'value' + err;
      }
      if (day > daysInMonth) {
        day = 1;
      }
      week.push(day);
      day++;
    }
    dates.push(week);
  }
  return dates;
};

const calendarMonth = getCalendarMonth(daysInMonth, dayOfWeek);
console.log(calendarMonth);
let daysArray = calendarMonth.flat();
console.log(daysArray);

const notCurrentMonth = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < dayOfWeek && arr[i] > daysInMonth - dayOfWeek) {
      res.push(true);
    } else if (i > daysInMonth - dayOfWeek && arr[i] < dayOfWeek) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};
const notCurrentMonthRes = notCurrentMonth(daysArray);
console.log(notCurrentMonthRes);

let selectedDate = (arr, checkInDate, checkOutDate) => {
  let resDate = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (checkInDate === arr[i] && i < daysInMonth - dayOfWeek) ||
      (checkOutDate === arr[i] && i > dayOfWeek)
    ) {
      resDate.push(true);
    } else if (arr[i] >= checkInDate && arr[i] <= checkOutDate) {
      resDate.push(true);
    } else resDate.push(false);
  }
  try {
    if (checkInDate > daysInMonth) throw ' greater than days in a month';
  } catch (err) {
    return 'value' + err;
  }
  try {
    if (checkOutDate < checkInDate) throw ' cannot be less than the first date';
  } catch (err) {
    return 'value' + err;
  }
  return resDate;
};

let selectedDateRes = selectedDate(daysArray, 6, 31);
console.log(selectedDateRes);

const days = [{}];
const selected = [{}];
const current = [{}];

daysArray.forEach((item) => days.push({ dayOfMonth: item }));
selectedDateRes.forEach((item) => selected.push({ selectedDay: item }));
notCurrentMonthRes.forEach((item) => current.push({ notCurrentMonth: item }));

const calendarDay = days.map((item, index) => ({
  ...item,
  ...selected[index],
  ...current[index],
}));

function convertArr(arr, cols) {
  let resultArr = [];
  while (arr.length > 0) {
    resultArr.push(arr.slice(0, cols));
    arr.splice(0, cols);
  }
  return resultArr;
}
let cols = 7;
calendarDay.shift();
console.log(convertArr(calendarDay, cols));
