const check = (palindrome) =>{

  let long = palindrome.length;
  for (let i = 0; i < (long / 2); i++ ){
    console.log(i);
    if (palindrome[i] !== palindrome[long - 1 - i]){
      return 'false';
    }
  }
  return 'true';
}

console.log(check('divider'));

console.log('----------');

let a = 89;
let b = 86;

max = a > b ? 'true' : 'false';
console.log(max);

console.log('----------');

let c = 8;
let d = 86;

min = c < d ? 'true' : 'false';
console.log(min);

console.log('----------');

const arr = ['4', '12', '50', '70', '62', '10', '93', '90', '7', '100'];
for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i].replace('0', 'zero');
}

console.log(arr);



