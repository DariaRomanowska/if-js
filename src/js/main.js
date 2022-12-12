let searchHotel = document.getElementById('hotel-name');
let buttonForm = document.getElementById('button-form');
let form = document.querySelector('form');

let mainBlock = document.querySelector('.main');
let block = document.createElement('div');
mainBlock.appendChild(block);
block.classList.add('hidden-block');

window.onkeyup = keyup;
let inputTextValue;

let titleOfBlock = document.createElement('h2');
block.appendChild(titleOfBlock);
titleOfBlock.innerHTML = 'Available hotels';
titleOfBlock.className = 'homes-title"';

let blockGallery = document.createElement('div');
block.appendChild(blockGallery);
blockGallery.className = 'block-gallery';
function keyup(e) {
  inputTextValue = e.target.value;
  e.preventDefault();
 let url = 'https://if-student-api.onrender.com/api/hotels?search=' + inputTextValue;
   fetch(url)
    .then((resp) => resp.json())
       .then(function (data) {
           return data.map(function (hotel) {
               let div = createNode('div');
               div.className = 'block-slider';
               let img = createNode('img');
               img.className = 'img-block';
               let pName = createNode('p');
               pName.className = 'name';
               let pCity = createNode('p');
               pCity.className = 'localization';

               img.src = hotel.imageUrl;
               pName.innerHTML = hotel.name;
               pCity.innerHTML = `${hotel.city} ${hotel.country}`;

               append(div, img);
               append(div, pName);
               append(div, pCity);
               append(blockGallery, div);
           })
       })
       .catch(function(error) {
           console.log(error);
       })
}



function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}




const gap = 100;
const content = document.querySelectorAll('.block-slider'),
    next = document.getElementById('next-top'),
    prev = document.getElementById('prev-top');
blockGallery.appendChild(next);
blockGallery.appendChild(prev);


next.addEventListener('click', () => {
    blockGallery.scrollBy(width + gap, 0);
    if (blockGallery.scrollWidth !== 0) {
        prev.style.display = 'flex';
    }
    if (content.scrollWidth - width - gap <= blockGallery.scrollLeft + width) {
        next.style.display = 'none';
    }
});
prev.addEventListener('click', () => {
    blockGallery.scrollBy(-(width + gap), 0);
    if (blockGallery.scrollLeft - width - gap <= 0) {
        prev.style.display = 'none';
    }
    if (!content.scrollWidth - width - gap >= blockGallery.scrollLeft + width) {
        next.style.display = 'flex';
    }
});
let width = blockGallery.offsetWidth;
window.addEventListener('resize', () => (width = blockGallery.offsetWidth))

