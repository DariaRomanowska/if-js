const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

// let divHomes = document.querySelector('.homes')
const blockHomes = document.getElementById('div');
const titleBlockHomes = document.createElement('h2');
titleBlockHomes.className = 'homes-title';
titleBlockHomes.innerHTML = 'Homes guests loves';
blockHomes.append(titleBlockHomes);
const homesGallery = document.querySelector('.homes--gallery');
homesGallery.className = 'homes--gallery';
blockHomes.append(homesGallery);

window.addEventListener('load', function () {
  data.map((element) => {
    const blockSliderHome = document.createElement('div');
    blockSliderHome.className = 'slider';
    homesGallery.append(blockSliderHome);

    const imgHotel = document.createElement('img');
    imgHotel.className = 'homesImg';
    imgHotel.src = element.imageUrl;
    blockSliderHome.appendChild(imgHotel);

    const nameHotel = document.createElement('p');
    nameHotel.className = 'name';
    nameHotel.innerHTML = element.name;
    blockSliderHome.appendChild(nameHotel);

    const cityHotel = document.createElement('p');
    cityHotel.className = 'localization';
    cityHotel.innerHTML = element.city;
    blockSliderHome.appendChild(cityHotel);

    const countryHotel = document.createElement('p');
    countryHotel.className = 'localization--country';
    countryHotel.innerHTML = element.country;
    blockSliderHome.appendChild(countryHotel);
  });
});

const gap = 100;
const content = document.querySelectorAll('.slider'),
  next = document.getElementById('next'),
  prev = document.getElementById('prev');

next.addEventListener('click', () => {
  homesGallery.scrollBy(width + gap, 0);
  if (homesGallery.scrollWidth !== 0) {
    prev.style.display = 'flex';
  }
  if (homesGallery.scrollLeft - width - gap <= 0) {
    next.style.display = 'none';
  }
});
prev.addEventListener('click', () => {
  homesGallery.scrollBy(-(width + gap), 0);
  if (homesGallery.scrollLeft - width - gap <= 0) {
    prev.style.display = 'none';
  }
  if (!content.scrollWidth - width - gap <= homesGallery.scrollLeft + width) {
    next.style.display = 'flex';
  }
});
let width = homesGallery.offsetWidth;
window.addEventListener('resize', () => (width = homesGallery.offsetWidth));
