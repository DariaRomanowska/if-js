const palindrome = (word) =>{

  let long = word.length;
  for (let i = 0; i < (long / 2); i++ ){
    console.log(i);
    if (word[i] !== word[long - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(palindrome('redivider'));

console.log('----------');

let a = 56;
let b = 321;

max = a > b ? a : b;
console.log(max);

console.log('----------');

let c = -45;
let d = 6;

min = c < d ? c : d;
console.log(min);

console.log('----------');

let arr = [4, 12, 50, 70, 62, 10, 93, 90, 7, 100];

for (let elem in arr){
  if(arr[elem] / 100 === 1) {
    arr[elem] = (arr[elem]  / 100) + 'zero' + 'zero';
  } else if (arr[elem] % 10 === 0) {
    arr[elem] = arr[elem] / 10 + 'zero';
  }
}
console.log(arr);
console.log('----------');


