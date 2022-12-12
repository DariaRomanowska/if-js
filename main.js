const el1 = document.getElementById('text1');
const el2 = document.getElementById('text2');
const el3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]: function () {
    let index = 0;
    const colorData = this.data;
    return {
      next() {
        if (index >= colorData.length) {
          index = 0;
          return { value: undefined, done: true };
        } else {
          return { value: colorData[index++], done: false };
        }
      },
    };
  },
};
const iterator = colors[Symbol.iterator]();

el1.onclick = function changeStyle(event) {
  event.target.style.color = iterator.next().value;
};

el2.onclick = function changeStyle(event) {
  event.target.style.color = iterator.next().value;
};
el3.onclick = function changeStyle(event) {
  event.target.style.color = iterator.next().value;
};
