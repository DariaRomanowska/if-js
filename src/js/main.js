
let searchHotel = document.getElementById('hotel-name');
let buttonForm = document.getElementById('button-form');
let hotels = [];

window.addEventListener('load', () => {
    loadHotels()
});

function loadHotels() {
    let url = 'https://if-student-api.onrender.com/api/hotels';
    fetch(url, {
        method: 'GET',
    })
        .then((resp) => resp.json())
        .then((data) => {
            hotels = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

buttonForm.onclick = async function (e) {
    e.preventDefault();
    let val = searchHotel.value.toLowerCase();

    if (document.getElementById('hotels')) removeNode()

    loadHotels()

    if (val === '') {
        return;
    } else {
        hotels = hotels.filter(
            (el) =>
                el.name.toLowerCase().includes(val) ||
                el.country.toLowerCase().includes(val) ||
                el.city.toLowerCase().includes(val),
        );

    }
    renderFilteredElements(hotels);
    renderArrows()
};

function removeNode() {
    document.getElementById('hotels').remove()
}

function renderArrows() {
    const main = document.getElementById('sliders')

    let next = document.createElement('div');
    next.className = 'swiper-button-next'
    main.appendChild(next)

    let prev = document.createElement('div');
    prev.className = 'swiper-button-prev'
    main.appendChild(prev)
}

function renderFilteredElements(hotels) {
    let headerSection = document.getElementById('header');
    let searchingResult = document.createElement('div');
    searchingResult.setAttribute('id', 'hotels')
    headerSection.appendChild(searchingResult);
    searchingResult.classList.add('background-homes');
    searchingResult.classList.add('homes');

    let titleOfBlock = document.createElement('h2');
    searchingResult.appendChild(titleOfBlock);
    titleOfBlock.innerHTML = 'Available hotels';
    titleOfBlock.className = 'homes-title"';

    let blockGallery = document.createElement('div');
    searchingResult.appendChild(blockGallery);
    blockGallery.setAttribute('id', 'sliders')
    blockGallery.classList.add('homes--gallery');

    hotels.map((hotel) => {
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
    });

    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }
}
