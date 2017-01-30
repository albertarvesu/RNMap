
const LATITUDE = 1.3499986
const LONGITUDE = 103.9499962
const SPACE = 0.01

export default [
  {
    id: '1',
    latitude: LATITUDE - SPACE,
    longitude: LONGITUDE - SPACE,
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    id: '2',
    latitude: LATITUDE + SPACE,
    longitude: LONGITUDE + SPACE,
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: '3',
    latitude: LATITUDE + SPACE,
    longitude: LONGITUDE - SPACE,
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    id: '4',
    latitude: LATITUDE - SPACE,
    longitude: LONGITUDE + SPACE,
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    id: '5',
    latitude: LATITUDE - (SPACE * 2),
    longitude: LONGITUDE - (SPACE * 2),
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  }, {
    id: '6',
    latitude: LATITUDE + (SPACE * 2),
    longitude: LONGITUDE + (SPACE * 2),
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
]
