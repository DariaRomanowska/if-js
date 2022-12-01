const checkBlock = [
  {
    name: 'Adults',
    plus: '+',
    minus: '-',
  },
  {
    name: 'Children',
    plus: '+',
    minus: '-',
  },
  {
    name: 'Rooms',
    plus: '+',
    minus: '-',
  },
];

const childOldArray = [
  '0 years old',
  '1 years old',
  '2 years old',
  '3 years old',
  '4 years old',
  '5 years old',
  '6 years old',
  '7 years old',
  '8 years old',
  '9 years old',
  '10 years old',
  '11 years old',
  '12 years old',
  '13 years old',
  '14 years old',
  '15 years old',
  '16 years old',
  '17 years old',
];

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
    countQuery.className = 'check-count';
    countQuery.value = '0';
    checkStepper.appendChild(countQuery);

    const btnMinus = document.createElement('button');
    btnMinus.className = 'btn-check-l';

    btnMinus.type = 'button';
    btnMinus.innerHTML = element.minus;
    checkStepper.appendChild(btnMinus);

    const btnPlus = document.createElement('button');
    btnPlus.className = 'btn-check-r';

    btnPlus.type = 'button';
    btnPlus.innerHTML = element.plus;
    checkStepper.appendChild(btnPlus);
  });
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

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-check-r')) {
    if (
      Number(e.target.parentElement.querySelector('.check-count').value) + 1 >
      30
    ) {
      return;
    }
    ++e.target.parentElement.querySelector('.check-count').value;
  } else if (e.target.classList.contains('btn-check-l')) {
    if (
      Number(e.target.parentElement.querySelector('.check-count').value) - 1 <
      0
    ) {
      return;
    }
    --e.target.parentElement.querySelector('.check-count').value;
  }
});

barButton.addEventListener('click', () => {
  document.querySelector('.check--form').classList.add('show');
});

const childCheck = document.createElement('div');
childCheck.className = 'child-block';
checkForm.append(childCheck);

const childQuest = document.createElement('p');
childQuest.className = 'child-text';
childQuest.innerHTML = 'What is the age of the child you’re travelling with?';
childCheck.appendChild(childQuest);

window.addEventListener('load', function () {
  const divSel = document.createElement('div');
  divSel.className = 'div-sel'
  childCheck.appendChild(divSel)
  const childSelect = document.createElement('SELECT');
  childSelect.className = 'child-select';
  divSel.appendChild(childSelect);
  for (const i in childOldArray) {
    const childOpt = document.createElement('option');
    childOpt.className = 'child-opt';
    childOpt.innerHTML = childOldArray[i];
    childSelect.appendChild(childOpt);
  }
});


document.addEventListener('click', function (e) {
  if (Number(e.target.parentElement.querySelector('.check-count').value) > 0) {
    childCheck.classList.add('show-child');
  }  else {
    childCheck.classList.remove('show-child');
  }
});

