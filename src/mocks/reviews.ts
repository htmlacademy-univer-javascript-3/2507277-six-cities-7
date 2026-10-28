import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { offers } from './offers';

export const reviews: Record<Offer['id'], Review[]> = {
  [offers[0].id]: [
    {
      id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
      date: '2019-05-08T14:13:56.569Z',
      user: { name: 'Oliver Conner', avatarUrl: '/img/avatar-max.jpg', isPro: false },
      comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      rating: 4,
    },
    {
      id: 'f56997d2-e6dc-42be-93a4-9e238d5e824b',
      date: '2019-04-24T10:00:00.000Z',
      user: { name: 'Angelina', avatarUrl: '/img/avatar-angelina.jpg', isPro: true },
      comment: 'A bright apartment with a comfortable bed. The canals and the city centre are within walking distance.',
      rating: 5,
    },
  ],
  [offers[1].id]: [
    {
      id: '9e5014ee-55e7-4166-a24e-3cfeef138173',
      date: '2019-06-12T09:30:00.000Z',
      user: { name: 'Max', avatarUrl: '/img/avatar-max.jpg', isPro: false },
      comment: 'A cosy room in a quiet neighbourhood. The host was helpful and the nearby cafes were great.',
      rating: 4,
    },
  ],
  [offers[2].id]: [],
  [offers[3].id]: [
    {
      id: 'f9e19632-d173-4ea0-a472-11e121ec491d',
      date: '2019-07-03T16:45:00.000Z',
      user: { name: 'Oliver Conner', avatarUrl: '/img/avatar-max.jpg', isPro: false },
      comment: 'We enjoyed the spacious living room and the sunny windows. A lovely place for a family trip.',
      rating: 5,
    },
  ],
};
