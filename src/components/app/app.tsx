import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import { Offer, OfferDetails } from '../../types/offer';
import { Review } from '../../types/review';

type AppScreenProps = {
  offers: Offer[];
  offerDetails: OfferDetails[];
  reviews: Record<Offer['id'], Review[]>;
  nearbyOffers: Record<Offer['id'], Offer[]>;
};

function App({ offers, offerDetails, reviews, nearbyOffers }: AppScreenProps): JSX.Element {
  const isAuthorized = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage offers={offers} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute isAuthorized={isAuthorized}>
              <FavoritesPage offers={offers.filter((offer) => offer.isFavorite)} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              offerDetails={offerDetails}
              reviews={reviews}
              nearbyOffers={nearbyOffers}
              isAuthorized={isAuthorized}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
