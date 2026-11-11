import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import { CITIES } from '../../const';
import type { AppDispatch } from '../../store';
import { changeCity } from '../../store/action';
import { selectCity, selectCityOffers } from '../../store/selectors';

function MainPage(): JSX.Element {
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const city = useSelector(selectCity);
  const offers = useSelector(selectCityOffers);
  const isEmpty = offers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index${isEmpty ? ' page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={CITIES} activeCity={city} onCityChange={(nextCity) => dispatch(changeCity(nextCity))} />
        <div className="cities">
          <div className={`cities__places-container container${isEmpty ? ' cities__places-container--empty' : ''}`}>
            {isEmpty ? (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
                </div>
              </section>
            ) : (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span
                    className="places__sorting-type"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isSortingOpen}
                    aria-controls="sorting-options"
                    onClick={() => setIsSortingOpen((isOpen) => !isOpen)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setIsSortingOpen((isOpen) => !isOpen);
                      }
                      if (event.key === 'Escape') {
                        setIsSortingOpen(false);
                      }
                    }}
                  >
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul id="sorting-options" className={`places__options places__options--custom${isSortingOpen ? ' places__options--opened' : ''}`}>
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <OffersList offers={offers} />
              </section>
            )}
            <div className="cities__right-section">
              {!isEmpty && <Map city={offers[0].city} offers={offers} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

