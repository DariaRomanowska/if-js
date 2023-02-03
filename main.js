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
    this.studentList = studentList
  }

  getList(){
    return this.studentList.map(
        ({ firstName, lastName, admissionYear, courseName }) =>
            new Student(firstName, lastName, admissionYear, courseName));
      }

  getInfo() {
    return this.getList()
      .sort((a, b) => {
        return a.course - b.course;
      })
      .map(
        (student) =>
          `${student.fullName} -  ${student.courseName} , ${student.course} курс`
      );

  }
}

const students = new Students(studentsData);

console.log(students.getInfo());