import { Offer } from '../types/offer';
import { offers } from './offers';

export const nearbyOffers: Record<Offer['id'], Offer[]> = {
  [offers[0].id]: [offers[1], offers[2], offers[3]],
  [offers[1].id]: [offers[0], offers[2], offers[3]],
  [offers[2].id]: [offers[0], offers[1], offers[3]],
  [offers[3].id]: [offers[0], offers[1], offers[2]],
};
