export interface CampgroundProps {
  campground: Campground;
}

export interface Campground {
  camp_id: number;
  author: string;
  location: string;
  title: string;
  description: string;
  price: number;
  url: string;
  rating: number;
  reviews: number;
}
