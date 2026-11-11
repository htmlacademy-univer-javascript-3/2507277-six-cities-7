import { createReducer } from '@reduxjs/toolkit';
import { CityName } from '../const';
import { Offer } from '../types/offer';
import { changeCity, setOffers } from './action';

type AppState = {
  city: CityName;
  offers: Offer[];
};

const initialState: AppState = {
  city: 'Paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
