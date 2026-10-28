import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.37454, longitude: 4.897976, zoom: 12 },
    },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16 },
    price: 120,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    previewImage: '/img/apartment-01.jpg',
  },
  {
    id: 'a4ddae3d-5655-44b1-8a14-bd246ea272a1',
    title: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.37454, longitude: 4.897976, zoom: 12 },
    },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16 },
    price: 80,
    rating: 4.1,
    isPremium: false,
    isFavorite: true,
    previewImage: '/img/room.jpg',
  },
  {
    id: 'fa8992d9-3643-4347-a8bc-d31b2ade47db',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.37454, longitude: 4.897976, zoom: 12 },
    },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    price: 132,
    rating: 4.5,
    isPremium: false,
    isFavorite: true,
    previewImage: '/img/apartment-02.jpg',
  },
  {
    id: 'ba952f1f-43f5-4df5-9f57-cbba49a6f225',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.37454, longitude: 4.897976, zoom: 12 },
    },
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 16 },
    price: 180,
    rating: 5,
    isPremium: true,
    isFavorite: false,
    previewImage: '/img/apartment-03.jpg',
  },
];
