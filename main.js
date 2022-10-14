let date = '2020-11-26';

const format = (query) => {
    let querySplit = query.split('-');
    let queryReverse = querySplit.reverse();
    return queryReverse.join('.');
}

console.log(format(date));

console.log('--------')

const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];


const find = (value) => {
    return data.filter(el => el.country === value || el.city ===  value || el.hotel === value)
}

const result = find('Indonesia')

result.forEach(({country, city, hotel}) => {
    console.log([country, city, hotel])
})



