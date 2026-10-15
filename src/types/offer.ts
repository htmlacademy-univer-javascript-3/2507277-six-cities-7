export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  city: City;
  location: Location;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
};

export type OfferDetails = Offer & {
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  description: string;
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
};

export type CardVariant = 'cities' | 'favorites' | 'near-places';
