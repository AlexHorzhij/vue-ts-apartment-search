export interface IApartment {
  id: string;
  title: string;
  imgUrl: string;
  descr: string;
  rating: number;
  price: number;
  location: {
    city: string;
  };
  owner: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface ISearchQuery {
  city: string;
  price: number | null;
}
