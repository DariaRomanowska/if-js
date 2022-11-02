console.log('--- LESSON 6 ---');
const word = 'redivide';
const palindrom = word.split('').reverse().join('');

console.log(word === palindrom);

console.log('------');

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];
const find = (value) => {
  return hotels.filter(
    (el) => el.name === value || el.city === value || el.country === value,
  );
};

const findString = find('Poland');

console.log(
  findString.map(({ name, city, country }) => String([name, city, country])),
);

console.log('-----');

const cityByCountry = {};
for (const { city, country } of hotels) {
  if (!Object.hasOwn(cityByCountry, country)) {
    cityByCountry[country] = [];
  }
  cityByCountry[country].push(city);
}
console.log(cityByCountry);

console.log('------');

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 2;

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  let day = daysInMonth - dayOfWeek + 1;
  let dates = [];
  for (let i = 0; i < 5; i++) {
    const week = [];
    for (let j = 0; j < daysInWeek; j++) {
      if (dayOfWeek > 7) {
        return 'Error';
      } else if (day > 30) {
        day = 1;
      }
      week.push(day);
      day++;
    }
    dates.push(week);
  }
  return dates;
};

const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);
console.log(calendarMonth);

console.log('---------');

console.log('--- LESSON 3 ---');
const palindrome = (word) => {
  let long = word.length;
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

let a = 56;
let b = 321;

const max = (a, b) => (a > b ? a : b);
console.log(max(a, b));

console.log('----------');

let c = -45;
let d = 6;

const min = (c, d) => (c < d ? c : d);
console.log(min(c, d));

console.log('----------');

const arr = [4, 12, 50, 70, 62, 10, 93, 90, 7, 100];

const search = (arr) => {
  let res = [];

  for (let item of arr) {
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

console.log('--- LESSON 2 ---');
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
