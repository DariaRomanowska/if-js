const checkBlock = [
  {
    id: 'adult',
    name: 'Adults',
    classInc: 'adult-inc',
    classDec: 'adult-dec',
  },
  {
    id: 'child',
    name: 'Children',
    classInc: 'child-inc',
    classDec: 'child-dec',
  },
  {
    id: 'room',
    name: 'Rooms',
    classInc: 'room-inc',
    classDec: 'room-dec',
  },
];


const i = 0;
let childrenOptionAge = [];
for( let i = 0; i < 17; ){
  childrenOptionAge.push(i + 1 + 'years old')
}
console.log(childrenOptionAge)
//   '0 years old',
//   '1 years old',
//   '2 years old',
//   '3 years old',
//   '4 years old',
//   '5 years old',
//   '6 years old',
//   '7 years old',
//   '8 years old',
//   '9 years old',
//   '10 years old',
//   '11 years old',
//   '12 years old',
//   '13 years old',
//   '14 years old',
//   '15 years old',
//   '16 years old',
//   '17 years old',
// ];

const checkBar = document.getElementById('form-main');
const barButton = document.getElementById('check-bar');

const checkForm = document.createElement('div');
checkForm.className = 'check--form';
checkBar.appendChild(checkForm);

window.addEventListener('load', function () {
  checkBlock.map((element) => {
    const checkFormContent = document.createElement('div');
    checkFormContent.className = 'check--form_content';
    checkForm.appendChild(checkFormContent);

    const checkName = document.createElement('p');
    checkName.className = 'check-name';
    checkName.innerHTML = element.name;
    checkFormContent.appendChild(checkName);

    const checkStepper = document.createElement('div');
    checkStepper.className = 'check-stepper';
    checkFormContent.appendChild(checkStepper);

    const countQuery = document.createElement('input');
    countQuery.setAttribute('id', element.id);
    countQuery.setAttribute('value', '0');
    countQuery.className = 'check-count';
    checkStepper.appendChild(countQuery);

    const btnMinus = document.createElement('button');
    btnMinus.className = 'btn-check-l';
    btnMinus.type = 'button';
    btnMinus.innerHTML = '-';
    btnMinus.classList.add(element.classDec);
    checkStepper.appendChild(btnMinus);

    const btnPlus = document.createElement('button');
    btnPlus.className = 'btn-check-r';
    btnPlus.type = 'button';
    btnPlus.innerHTML = '+';
    btnPlus.classList.add(element.classInc);
    checkStepper.appendChild(btnPlus);
  });

  document.addEventListener('click', function (e) {
    const adult = document.getElementById('adult');
    const adultValue = adult.value;
    const room = document.getElementById('room');
    const roomValue = room.value;
    const child = document.getElementById('child');
    const childValue = child.value;
    if (e.target.classList.contains('adult-inc')) {
      if (Number(adultValue) + 1 > 30) {
        return;
      }
      ++adult.value;
    } else if (e.target.classList.contains('adult-dec')) {
      if (Number(adultValue) - 1 < 0) {
        return;
      }
      --adult.value;
    }
    if (e.target.classList.contains('room-inc')) {
      if (Number(roomValue) + 1 > 30) {
        return;
      }
      ++room.value;
    } else if (e.target.classList.contains('room-dec')) {
      if (Number(roomValue) - 1 < 0) {
        return;
      }
      --room.value;
    }
    if (e.target.classList.contains('child-inc')) {
      if (Number(childValue) + 1 > 10) {
        return;
      }
      ++child.value;
    } else if (e.target.classList.contains('child-dec')) {
      if (Number(childValue) - 1 < 0) {
        return;
      }
      --child.value;
    }
  });

  const childBlockAge = document.createElement('div');
  childBlockAge.className = 'child-block';
  checkForm.append(childBlockAge);

  const childQuest = document.createElement('p');
  childQuest.className = 'child-text';
  childQuest.innerHTML = 'What is the age of the child you’re travelling with?';
  childBlockAge.appendChild(childQuest);

  const divSelect = document.createElement('div');
  divSelect.setAttribute('id', 'select-block');
  divSelect.className = 'child-select-age';

  document.addEventListener('click', function (event) {
    const children = document.getElementById('child');
    let value = children.value;
    if (Number(value) > 0) {
      childBlockAge.classList.add('show-child');
    } else {
      childBlockAge.classList.remove('show-child');
    }

    function addSelect() {
      const childSelect = document.createElement('SELECT');
      childSelect.className = 'child-select';
      childBlockAge.appendChild(divSelect);
      divSelect.appendChild(childSelect);
      for (const i in childOldArray) {
        const childOpt = document.createElement('option');
        childOpt.className = 'child-opt';
        childOpt.innerHTML = childOldArray[i];
        childSelect.appendChild(childOpt);
      }
      const currentSelects = document.querySelectorAll(
        '#select-block .child-select',
      );
      console.log(currentSelects);
      const currentSelectCount = currentSelects.length;
      console.log(currentSelectCount);
      if (value !== currentSelectCount) {
        if (value < currentSelectCount) {
          divSelect[0].remove();
        }
      } else {
        return addSelect;
      }
    }
    addSelect();
  });

  // function countChildrenAge() {
  //   const inputChild = document.getElementById('child');
  //   const value = Number(inputChild.value);
  //   const currentSelect = document.querySelectorAll('.child-select');
  //   console.log(currentSelect)
  //   const currentSelectCount = currentSelect.length;
  //   const newSelect = document.querySelectorAll('.child-select');
  //   if (value !== currentSelectCount) {
  //     if (value > currentSelectCount) {
  //       divSelect.appendChild(newSelect);
  //     } else {
  //       divSelect.removeChild();
  //     }
  //   }
  // }
  //
  // countChildrenAge();
});

barButton.addEventListener('click', () => {
  document.querySelector('.check--form').classList.add('show');
});

window.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(checkBar);
  if (!withinBoundaries) {
    checkForm.classList.remove('show');
  }
});
