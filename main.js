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

console.log(test + '1'); // '21' string
console.log(test - 1); // 1 number

test = Boolean(false);
console.log(test);

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

for (const elem of arr2){
  if(elem % 3){
    console.log(elem);
  }
}
console.log('----------');


