import { Link } from 'react-router-dom';
import { CardVariant, Offer } from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  variant?: CardVariant;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function PlaceCard({ offer, variant = 'cities', onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  const isFavorite = variant === 'favorites';
  const offerUrl = `/offer/${offer.id}`;

  return (
    <article className={`${variant}__card place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${variant}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerUrl}>
          <img className="place-card__image" src={offer.previewImage} width={isFavorite ? 150 : 260} height={isFavorite ? 110 : 200} alt={offer.title} />
        </Link>
      </div>
      <div className={`place-card__info${isFavorite ? ' favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button${offer.isFavorite ? ' place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
