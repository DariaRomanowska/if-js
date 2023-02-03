const palindrom = (word) => {
  const wordReversed = word.split('').reverse().join('');
 return word === wordReversed;
}
console.log(palindrom("return"))
console.log(palindrom("redivider"))

console.log('------');

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];
const find = (value) => {
  return hotels.filter(
    (el) => el.name === value || el.city === value || el.country === value,
  );
};

const findString = find('Poland');

console.log(
  findString.map(({ name, city, country }) => String([name, city, country])),
);

console.log('-----');

const cityByCountry = {};
for (const { city, country } of hotels) {
  if (!Object.hasOwn(cityByCountry, country)) {
    cityByCountry[country] = [];
  }
  cityByCountry[country].push(city);
}
console.log(cityByCountry);

console.log('------');

const daysInMonth = 31;
const dayOfWeek = 7;

const getCalendarMonth = (daysInMonth, dayOfWeek) => {
  let day = daysInMonth - dayOfWeek + 1;
  let dates = [];
  for (let i = 0; i < 5; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      try {
        if (dayOfWeek > 7) throw (' greater than days in a week');
      }
      catch (err) {
        return 'value' + err
      }
      try {
        if (daysInMonth < 28) throw (' is less than days in a month');
        if (daysInMonth > 31) throw (' is greater than days in a month');
      }
      catch (err) {
        return 'value' + err
      }
      if (day > daysInMonth) {
        day = 1;
      }
      week.push(day);
      day++;
    }
    dates.push(week);
  }
  return dates;
};

function catchError(dayOfWeek) {

}

catchError(dayOfWeek);

const calendarMonth = getCalendarMonth(daysInMonth, dayOfWeek);
console.log(calendarMonth);
