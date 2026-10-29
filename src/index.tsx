import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { offerDetails } from './mocks/offer-details';
import { reviews } from './mocks/reviews';
import { nearbyOffers } from './mocks/nearby-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} offerDetails={offerDetails} reviews={reviews} nearbyOffers={nearbyOffers} />
  </React.StrictMode>
);
