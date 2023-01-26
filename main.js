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
console.log(daysArray)

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
console.log(selectedDateRes)

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

console.log("----LESSON-8----");
const studentsData = [
  {
    firstName: "Василий",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Java",
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    admissionYear: 2018,
    courseName: "JavaScript",
  },
  {
    firstName: "Александр",
    lastName: "Федоров",
    admissionYear: 2017,
    courseName: "Python",
  },
  {
    firstName: "Николай",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Android",
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

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }
}

class Students {
  constructor(studentList) {
    this.list = studentList.map(
      ({ firstName, lastName, admissionYear, courseName }) =>
        new Student(firstName, lastName, admissionYear, courseName)
    );
  }

  getInfo() {
    const arr = this.list
      .sort((a, b) => {
        return a.course - b.course;
      })
      .map(
        (student) =>
          `${student.fullName} -  ${student.courseName} , ${student.course} курс`
      );

    console.log(arr);
  }
}

const students = new Students(studentsData);

students.getInfo();
