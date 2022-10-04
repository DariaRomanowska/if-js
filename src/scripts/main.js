console.log('----------------');

const sum = x => y => x + y;
console.log(sum(5)(2));

console.log('----------------');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let i = 0;

function myFunction() {
  i++;
  if (i > colors.length - 1) {
    i = 0;
  }
}

text1.addEventListener('click', function() {
  myFunction();
  document.getElementById('text1').style.color = colors[i];
});
text2.addEventListener('click', function() {
  myFunction();
  document.getElementById('text2').style.color = colors[i];
});
text3.addEventListener('click', function() {
  myFunction();
  document.getElementById('text3').style.color = colors[i];
});
