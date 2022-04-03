export type GeoUsers = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: GeoUsers;
  phone: string;
  website: string;
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website: string;
  company?: Company;
}