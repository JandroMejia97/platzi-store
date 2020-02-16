export class User {
  id: {
    name: string,
    value: string
  };
  name: {
    title: string,
    first: string,
    last: string
  };
  email: string;
  gender: string;
  location: Location;
  phone: string;
  cell: string;
  picture: {
    large: URL,
    medium: URL,
    thumbnail: URL
  };
}

export class Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
  coordinates: {
    latitude: number,
    longitude: number
  };
  timezone: {
    offset: string,
    description: string
  };
}
