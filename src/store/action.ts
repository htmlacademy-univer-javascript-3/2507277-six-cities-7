import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../const';
import { Offer } from '../types/offer';

export const changeCity = createAction<CityName>('city/change');
export const setOffers = createAction<Offer[]>('offers/set');
