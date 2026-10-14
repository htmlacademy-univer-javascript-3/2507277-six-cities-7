import { OfferDetails } from '../types/offer';
import { offers } from './offers';

export const offerDetails: OfferDetails[] = [
  {
    ...offers[0],
    images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/studio-01.jpg'],
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Kitchen', 'Washing machine', 'Towels', 'Heating'],
    description: 'A bright apartment in a historic building near the canals. Enjoy a quiet stay within walking distance of the city centre.',
    host: { name: 'Angelina', avatarUrl: '/img/avatar-angelina.jpg', isPro: true },
  },
  {
    ...offers[1],
    images: ['/img/room.jpg', '/img/studio-photos.jpg'],
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Towels', 'Coffee machine'],
    description: 'A cosy room with natural wood furniture and a comfortable double bed. Cafes and public transport are nearby.',
    host: { name: 'Max', avatarUrl: '/img/avatar-max.jpg', isPro: false },
  },
  {
    ...offers[2],
    images: ['/img/apartment-02.jpg', '/img/apartment-01.jpg'],
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Fridge'],
    description: 'A spacious apartment overlooking the Prinsengracht canal. The kitchen has everything you need for a relaxed city break.',
    host: { name: 'Angelina', avatarUrl: '/img/avatar-angelina.jpg', isPro: true },
  },
  {
    ...offers[3],
    images: ['/img/apartment-03.jpg', '/img/studio-01.jpg', '/img/room.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Kitchen', 'Heating', 'Coffee machine', 'Washing machine'],
    description: 'A warm and welcoming apartment with a large bed and a sunny living room. Ideal for families exploring Amsterdam.',
    host: { name: 'Max', avatarUrl: '/img/avatar-max.jpg', isPro: false },
  },
];

