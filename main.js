const palindrome = (word) => {

    let long = word.length;
    for (let i = 0; i < (long / 2); i++) {
        console.log(i);
        if (word[i] !== word[long - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome('redivider'));

console.log('----------');

let a = 56;
let b = 321;

const max = (a, b) => a > b ? a : b;
console.log(max(a, b));

console.log('----------');

let c = -45;
let d = 6;

const min = (c, d) => c < d ? c : d;
console.log(min(c, d));

console.log('----------');

const arr = [4, 12, 50, 70, 62, 10, 93, 90, 7, 100];

const search = (arr) => {
    let res = [];

    for (let item of arr) {
        const replacedZero = String(item).replaceAll('0', 'zero');

        if(Number(replacedZero)) {
            res.push(Number(replacedZero))
        } else {
            res.push(replacedZero);
        }
    }

    return res;
}

const result = search(arr)
console.log(result);
console.log('----------');

=======
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
