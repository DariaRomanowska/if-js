console.log('----------------');

export const sum = (x) => (y) => x + y;
console.log(sum(5)(2));

console.log('----------------');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

export function getColor(item) {
  if (colors.find((el) => el === item)) {
    for (let i = 0; i < colors.length; i++) {
      if (colors[i] === item) {
        return colors[++i] ?? colors[0];
      }
    }
  } else {
    return colors[0];
  }
}

function setColor(element) {
  element.style.color = getColor(element.style.color);
}

text1.addEventListener('click', () => setColor(text1));
text2.addEventListener('click', () => setColor(text2));
text3.addEventListener('click', () => setColor(text3));
