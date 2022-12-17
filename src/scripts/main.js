const sectionGallery = document.getElementById('div');
const blockTitle = document.createElement('h2');
blockTitle.className = 'homes-title';
blockTitle.innerHTML = 'Homes guests loves';
sectionGallery.append(blockTitle);
const homesGallery = document.querySelector('.homes--gallery');
sectionGallery.append(homesGallery);

fetch('https://if-student-api.onrender.com/api/hotels', {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    sessionStorage.setItem('path', JSON.stringify(data));
    data.map((element) => {
      const slider = document.createElement('div');
      slider.className = 'slider';
      homesGallery.append(slider);

      const imgHomes = document.createElement('img');
      imgHomes.className = 'homesImg';
      imgHomes.src = element.imageUrl;
      slider.appendChild(imgHomes);

      const nameHotel = document.createElement('p');
      nameHotel.className = 'name';
      nameHotel.innerHTML = element.name;
      slider.appendChild(nameHotel);

      const city = document.createElement('p');
      city.className = 'localization';
      city.innerHTML = element.city;
      slider.appendChild(city);

      const country = document.createElement('p');
      country.className = 'localization--country';
      country.innerHTML = element.country;
      slider.appendChild(country);
    });
    console.log(sessionStorage.getItem('path'));
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
  if (content.scrollWidth - width - gap <= homesGallery.scrollLeft + width) {
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
