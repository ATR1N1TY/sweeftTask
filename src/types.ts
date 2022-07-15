export interface User {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
}

export interface FullUser {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
  jobDescriptor: string;
  jobArea: string;
  jobType: string;
  email: string;
  ip: string;
  company: Company;
  address: Address;
}

interface Company {
  name: string;
  suffix: string;
}

interface Address {
  zipCode: string;
  city: string;
  streetAddress: string;
  country: string;
  state: string;
}

export interface Crumb {
  fullName: string;
  id: number;
}
