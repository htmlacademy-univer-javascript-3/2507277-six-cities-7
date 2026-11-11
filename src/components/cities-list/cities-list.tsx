import { CityName } from '../../const';

type CitiesListProps = {
  cities: readonly CityName[];
  activeCity: CityName;
  onCityChange: (city: CityName) => void;
};

function CitiesList({ cities, activeCity, onCityChange }: CitiesListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item${city === activeCity ? ' tabs__item--active' : ''}`}
                href="#"
                aria-current={city === activeCity ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onCityChange(city);
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
