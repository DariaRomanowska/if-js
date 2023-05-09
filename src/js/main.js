const formBlock = document.getElementById('input-bg');

const modalFilter = document.createElement('div');
modalFilter.setAttribute('id', 'modal-filter');
modalFilter.classList.add('check--form');
formBlock.append(modalFilter);

const modalWindow = document.getElementById('showModal');
let selected = {
  children: [],
};
const counts = {
  adult: {
    count: 0,
  },
  room: {
    count: 0,
  },
  child: {
    count: 0,
  },
};
const elements = {
    adults: {
      identifier: 'adults',
      label: 'Adults',
      value: 0,
      count: 0,
      values: {
        min: 0,
        max: 10,
      },
    },
    rooms: {
      identifier: 'rooms',
      label: 'Rooms',
      value: 0,
      count: 0,
      values: {
        min: 0,
        max: 10,
      },
    },
    children: {
      identifier: 'children',
      label: 'Children',
      value: 0,
      count: 0,
      values: {
        min: 0,
        max: 10,
      },
      events: {
        onValueUpdate: function (element, div) {
          if (element.value > 0) {
            let title = document.createElement('h3');
            title.innerText =
              'What is the age of the child you’re travelling with?';
            title.classList.add('child-text');
            div.appendChild(title);
            for (
              let childIndex = 1;
              childIndex <= element.value;
              childIndex++
            ) {
              let childrenBlock = document.createElement('div'),
                select = document.createElement('select');
              select.setAttribute('data-index', childIndex);

              select.classList.add('child-opt');
              select.name = `child[${childIndex - 1}]`;

              let chooseChildAgeOption = document.createElement('option');
              chooseChildAgeOption.innerText = 'Choose child age';

              select.append(chooseChildAgeOption);

              for (let i = 0; i < 18; i++) {
                let option = document.createElement('option');
                option.classList.add('child-select');
                option.value = i;
                option.innerText = `${i} years`;
                option.setAttribute('data-index', i);

                if (selected.children[childIndex] == i) {
                  option.setAttribute('selected', true);
                }

                select.appendChild(option);
              }
              select.addEventListener('change', (e) => {
                let target = e.target;
                selected.children[target.getAttribute('data-index')] = parseInt(
                  target.value,
                );
              });
              childrenBlock.appendChild(select);
              div.append(childrenBlock);
            }
          }
        },
      },
    },
  },
  container = document.getElementById('modal-filter');

function render(container, elements) {
  function buildBlock(element) {
    let div = document.createElement('div'),
      divContent = document.createElement('div'),
      label = document.createElement('label'),
      input = document.createElement('input'),
      btnDecrease = document.createElement('button'),
      btnIncrease = document.createElement('button'),
      updateValue = function (div) {
        if (element.hasOwnProperty('events')) {
          let events = element.events;

          if (events.hasOwnProperty('onValueUpdate')) {
            events.onValueUpdate(element, container);
          }
        }
      };

    div.setAttribute('data-div', `${element.identifier}-block`);
    div.classList.add('check--form_content');
    divContent.classList.add('check-stepper');
    label.innerText = element.label;
    label.classList.add('check-name');
    input.classList.add('check-count');
    btnDecrease.innerText = '-';
    btnIncrease.innerText = '+';

    input.value = element.value;

    btnDecrease.setAttribute('data-update', element.identifier);
    btnDecrease.setAttribute('type', 'button');
    btnDecrease.className = 'btn-check-l';
    btnDecrease.classList.add('active');

    btnIncrease.setAttribute('data-update', element.identifier);
    btnIncrease.setAttribute('type', 'button');
    btnIncrease.className = 'btn-check-r';
    btnIncrease.classList.add('active');

    btnDecrease.addEventListener('click', (e) => {
      if (element.value <= element.values.min) return;

      elements[e.target.getAttribute('data-update')].value--;

      let counter = document.querySelector(`[data-value='${element.identifier}']`);
      counter.innerText = [element.value, element.label].join(' ');

      container.innerHtml = '';
      render(container, elements);
      updateValue(element, container);
    });

    btnIncrease.addEventListener('click', (e) => {
      if (element.value === element.values.max) return;

      elements[e.target.getAttribute('data-update')].value++;

      let counter = document.querySelector(`[data-value='${element.identifier}']`);
      counter.innerText = [element.value, element.label].join(' ');

      container.innerHtml = '';
      render(container, elements);
      updateValue(element, container);
    });

    if (element.value <= element.values.min)
      btnDecrease.classList.add('disabled');
    if (element.value === element.values.max)
      btnIncrease.classList.add('disabled');

    divContent.append(btnDecrease, input, btnIncrease);

    div.append(label, divContent);

    return div;
  }

  container.innerHTML = '';

  Object.keys(elements).forEach((element) =>
    container.append(buildBlock(elements[element])),
  );

}

render(container, elements, counts);

modalWindow.addEventListener('click', () => {
  modalFilter.classList.add('show-modal');
});

const bg = document.querySelector('#bg');
bg.addEventListener('click', () => {
  modalFilter.classList.remove('show-modal');
});
