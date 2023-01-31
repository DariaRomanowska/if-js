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

const daysInMonth = 31;
const dayOfWeek = 1;

const getCalendarMonth = (daysInMonth, dayOfWeek) => {
  let day = daysInMonth - dayOfWeek + 1;
  let dates = [];
  for (let i = 0; i < 5; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (dayOfWeek > 7) {
        return "Error";
      } else if (daysInMonth < 28) {
        return "Error";
      } else if (day > daysInMonth) {
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
let daysArray = calendarMonth.flat();

const notCurrentMonth = (arr) => {
  const res = [];
  for (let o = 0; o < arr.length; o++){
    if(o < 7 && arr[o] > 27) {
      res.push(true)
    } else if (o > 28 && arr[o] < 7){
      res.push(true)
    } else {
      res.push(false)
    }
  }return res
}
const notCurrentMonthRes = notCurrentMonth(daysArray);

let selectedDate = (arr, checkInDate, checkOutDate) => {
  let resDate = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkInDate === arr[i]) {
      resDate.push(true);
    } else if (checkInDate > 31) {
      return `Error day`;
    } else if (checkOutDate === arr[i] && checkOutDate > checkInDate) {
      resDate.push(true);
    } else if (checkOutDate < checkInDate) {
      return `Error date`;
    } else resDate.push(false);
  }
  return resDate;
};

let selectedDateRes = selectedDate(daysArray, 6, 13);

const days = [{}];
const selected = [{}];
const current = [{}];

daysArray.forEach((item) => days.push({ dayOfMonth: item }));
selectedDateRes.forEach((item) => selected.push({ selectedDay: item }));
notCurrentMonthRes.forEach((item) => current.push({ notCurrentMonth: item }));


const calendar = days.map((item, index) => ({
  ...item,
  ...selected[index],
  ...current[index],
}));
console.log(calendar);
