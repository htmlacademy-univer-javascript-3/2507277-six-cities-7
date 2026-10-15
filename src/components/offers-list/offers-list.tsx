import { useState } from 'react';
import { CardVariant, Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  variant?: CardVariant;
};

function OffersList({ offers, variant = 'cities' }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<Offer['id'] | null>(null);
  const listClassName = variant === 'favorites' ? 'favorites__places' : `${variant}__list places__list`;

  return (
    <div
      className={variant === 'cities' ? 'cities__places-list places__list tabs__content' : listClassName}
      data-active-offer-id={activeOfferId ?? undefined}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          variant={variant}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
