import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';

type FavoritesPageProps = {
  offersCount: number;
};

function FavoritesPage({ offersCount }: FavoritesPageProps): JSX.Element {
  const isEmpty = offersCount === 0;
  const placeCardsIds = Array.from({ length: offersCount }, (_, index) => `favorite-card-${index}`);

  return (
    <div className={`page${isEmpty ? ' page--favorites-empty' : ''}`}>
      <Header isAuthorized favoritesCount={offersCount} />

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
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>Amsterdam</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {placeCardsIds.map((id) => <PlaceCard key={id} variant="favorites" />)}
                    </div>
                  </li>
                </ul>
              </>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;

