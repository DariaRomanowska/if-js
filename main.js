let date = '2020-11-26';

const format = (query) => {
  let querySplit = query.split('-');
  let queryReverse = querySplit.reverse();
  return queryReverse.join('.');
};

console.log(format(date));

console.log('--------');

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold'
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine'
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad'
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship'
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA'
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel'
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel'
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte'
  }
];

let value = 'Germany';
const search = data.reduce(function(newArr, data) {
  if (data.country === value || data.city === value || data.hotel === value) {
    newArr.push(String(data.country) + ', ' + String(data.city) + ', ' + String(data.hotel));
  }
  return newArr;
}, []);

console.log(search);

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
