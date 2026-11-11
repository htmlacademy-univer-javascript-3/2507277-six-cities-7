import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { offerDetails } from './mocks/offer-details';
import { reviews } from './mocks/reviews';
import { nearbyOffers } from './mocks/nearby-offers';
import { store } from './store';
import { setOffers } from './store/action';

store.dispatch(setOffers(offers));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerDetails={offerDetails} reviews={reviews} nearbyOffers={nearbyOffers} />
    </Provider>
  </React.StrictMode>
);
