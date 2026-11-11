import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './index';

export const selectCity = (state: RootState) => state.city;
export const selectOffers = (state: RootState) => state.offers;

export const selectCityOffers = createSelector(
  [selectCity, selectOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city),
);
