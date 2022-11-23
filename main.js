const daysInMonth = 30;
const dayOfWeek = 2;
const getCalendarMonth = (daysInMonth, dayOfWeek) => {
  let day = daysInMonth - dayOfWeek + 1;
  let dates = [];
  for (let i = 0; i < 5; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (dayOfWeek > daysInMonth || dayOfWeek > 7) {
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

const calendarMonth = getCalendarMonth(daysInMonth, dayOfWeek);
let daysArray = calendarMonth.flat();

let selectedDate = (arr, checkInDate, checkOutDate) => {
  let resDate = [];
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

let selectedDateRes = selectedDate(daysArray, 3, 5);
const days = [{}];
const selected = [{}];
daysArray.forEach((item) => days.push({ dayOfMonth: item }));
selectedDateRes.forEach((item) => selected.push({ selectedDay: item }));

const calendar = days.map((item, index) => ({
  ...item,
  ...selected[index],
}));
console.log(calendar);

console.log('----LESSON-8----');
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const currentYear = new Date().getFullYear();

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return currentYear - this.admissionYear;
  }
}

const studentList = studentsData.map(
  ({ firstName, lastName, admissionYear, courseName }) =>
    new Student(firstName, lastName, admissionYear, courseName),
);

class Students {
  constructor(studentList) {
    this.student = [];

    for (let i = 0; i < studentList.length; i++) {
      this.student[i] = studentList[i];
    }
  }
}

Students.prototype.getInfo = function () {
  return `${this.fullName} -  ${this.courseName} , ${this.course} курс`;
};

const students = new Students(studentList);

console.log(students.getInfo());

console.log('----LESSON-2----');
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
