import { useEffect, useRef } from 'react';
import { Icon, Map as LeafletMap, Marker, TileLayer } from 'leaflet';
import { City, Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
};

const markerIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ city, offers }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const { latitude, longitude, zoom } = city.location;

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const map = new LeafletMap(mapRef.current, {
      center: [latitude, longitude],
      zoom,
    });

    new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    offers.forEach((offer) => {
      new Marker([offer.location.latitude, offer.location.longitude], {
        icon: markerIcon,
        title: offer.title,
        alt: offer.title,
      }).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [latitude, longitude, zoom, offers]);

  return <section className="cities__map map" ref={mapRef} aria-label={`Rental offers in ${city.name}`} />;
}

export default Map;
