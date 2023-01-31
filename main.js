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
          index = 1;
          return { value: colorData[0], done: true };
        } else {
          return { value: colorData[index++], done: false };
        }
      },
    };
  },
};

const iterator1 = colors[Symbol.iterator]();
const iterator2 = colors[Symbol.iterator]();
const iterator3 = colors[Symbol.iterator]();

el1.onclick = function changeStyle(event) {
  event.target.style.color = iterator1.next().value;
};
el2.onclick = function changeStyle(event) {
  event.target.style.color = iterator2.next().value;
};
el3.onclick = function changeStyle(event) {
  event.target.style.color = iterator3.next().value;
};
