import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import OffersList from '../../components/offers-list/offers-list';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';

type FavoritesPageProps = {
  offers: Offer[];
};

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const isEmpty = offers.length === 0;
  const cities = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <div className={`page${isEmpty ? ' page--favorites-empty' : ''}`}>
      <Header isAuthorized favoritesCount={offers.length} />

      <main className={`page__main page__main--favorites${isEmpty ? ' page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites${isEmpty ? ' favorites--empty' : ''}`}>
            {isEmpty ? (
              <>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </>
            ) : (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {cities.map((city) => (
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to={AppRoute.Main}>
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <OffersList offers={offers.filter((offer) => offer.city.name === city)} variant="favorites" />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;

