console.log('----LESSON-9----');

const el1 = document.getElementById('text1');
const el2 = document.getElementById('text2');
const el3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]: function () {
    let index = 0;
    const colorData = this.data;
    return {
      next() {
        if (index >= colorData.length) {
          index = 0;
          return { value: undefined, done: true };
        } else {
          return { value: colorData[index++], done: false };
        }
      },
    };
  },
};
const iterator = colors[Symbol.iterator]();

const changeStyle = (id) => (event) => {
  event.target.style.color = iterator.next(id).value;
};

el1.addEventListener('click', changeStyle(colors.data.index));
el2.addEventListener('click', changeStyle(colors.data.index));
el3.addEventListener('click', changeStyle(colors.data.index));

console.log('----CALENDAR-----');
function getDaysInMonth(month, year) {
  const monthNum = new Date(Date.parse(month + ' 1,' + year)).getMonth() + 1;
  return new Date(year, monthNum, 0).getDate();
}

const prevMonth = getDaysInMonth('oct', 2022);
const daysInMonth = getDaysInMonth('nov', 2022);

const dateCurrMonth = new Date('November 01, 2022');
const dayOfWeek = dateCurrMonth.getDay();
console.log(dayOfWeek);
const getCalendarMonth = (daysInMonth, dayOfWeek) => {
  let day = daysInMonth - dayOfWeek + 1;
  const dates = [];
  for (let i = 0; i < 5; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (dayOfWeek > daysInMonth || dayOfWeek > 7) {
        return 'Error';
      } else if (day > prevMonth) {
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
const daysArray = calendarMonth.flat();
const currentDay = new Date();
const today = currentDay.getDate();
const selectedDate = (arr, checkInDate, checkOutDate) => {
  const resDate = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkInDate === i) {
      resDate.push(true);
    } else if (checkInDate > 31) {
      return `Error day`;
    } else if (checkOutDate === i && checkOutDate > checkInDate) {
      resDate.push(true);
    } else if (checkOutDate < checkInDate) {
      return `Error date`;
    } else resDate.push(false);
  }
  return resDate;
};
const isToday = (arr, currDay) => {
  const todayRes = [];
  for (let i = 0; i < arr.length; i++) {
    if (currDay === i) {
      todayRes.push(true);
    } else if (currDay !== i) {
      todayRes.push(false);
    }
  }
  return todayRes;
};

const currentDayRes = isToday(daysArray, today);
console.log(currentDayRes);
const selectedDateRes = selectedDate(daysArray, 3, 5);
const days = [{}];
const selected = [{}];
const curDay = [{}];

daysArray.forEach((item) => days.push({ dayOfMonth: item }));
selectedDateRes.forEach((item) => selected.push({ selectedDay: item }));
currentDayRes.forEach((item) => curDay.push({currentDay: item}));

const calendar = days.map((item, index) => ({
  ...item,
  ...selected[index],
  ...curDay[index],
}));
console.log(calendar);

console.log('----LESSON----');
const dateEx = '2020-11-26';
const format = (query) => {
  const querySplit = query.split('-');
  const queryReverse = querySplit.reverse();
  return queryReverse.join('.');
};

console.log(format(dateEx));

console.log('--------');

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const value = 'Germany';
const searchCity = data.reduce(function (newArr, data) {
  if (data.country === value || data.city === value || data.hotel === value) {
    newArr.push(
      String(data.country) +
        ', ' +
        String(data.city) +
        ', ' +
        String(data.hotel),
    );
  }
  return newArr;
}, []);

console.log(searchCity);

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

console.log('--------');

console.log('----LESSON-2-----');
const palindrome = (word) => {
  const long = word.length;
  for (let i = 0; i < long / 2; i++) {
    console.log(i);
    if (word[i] !== word[long - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome('redivider'));

console.log('----------');

const a = 56;
const b = 321;

const max = (a, b) => (a > b ? a : b);
console.log(max(a, b));

console.log('----------');

const c = -45;
const d = 6;

const min = (c, d) => (c < d ? c : d);
console.log(min(c, d));

console.log('----------');

const arr = [4, 12, 50, 70, 62, 10, 93, 90, 7, 100];

const search = (arr) => {
  const res = [];

  for (const item of arr) {
    const replacedZero = String(item).replaceAll('0', 'zero');

    if (Number(replacedZero)) {
      res.push(Number(replacedZero));
    } else {
      res.push(replacedZero);
    }
  }

  return res;
};

const result = search(arr);
console.log(result);
console.log('----------');

let user;
user = 'John Doe';
console.log(user);

let student;
// eslint-disable-next-line prefer-const
student = 'Daria Ramanowska';
console.log(student);

user = student; //redefined data to 'Daria Ramanowska'
console.log(user);

let test = 1;
test++;

test = test + '1';
console.log(test); // '21' string

test = test - 1;
console.log(test); // 20 number

test = Boolean(test);
console.log(test); // true

console.log('----------');

const arr1 = [2, 3, 5, 8];
let res = 1;
for (const elem of arr1) {
  res *= elem;
}

console.log(res);

console.log('----------');

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (const i of arr2) {
  if (i > 5 && i < 10) {
    console.log(i);
  }
}
console.log('----------');

for (const elem of arr2) {
  if (elem % 3) {
    console.log(elem);
  }
}
