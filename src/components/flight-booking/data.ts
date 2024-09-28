import {
  Airline,
  BenefitEnum,
  CabinClassEnum,
  Flight,
  SearchFlightParams,
} from './types';

export const defaultSearchFlightParams: SearchFlightParams = {
  cabinClass: 'Economy',
  departureDate: '2021-10-02T00:00:00Z',
  from: 'Singapore',
  to: 'Saigon',
};

export const defaultFlights: Flight[] = [
  {
    id: '1',
    origin: 'Singapore',
    price: 120,
    destination: 'Saigon',
    cabinClass: 'business',
    airline: {
      id: '1',
      name: 'Singapore Airlines',
      logo: 'https://avatar.vercel.sh/singapore-airlines',
    },
    aircraftType: 'Boeing 777-300ER',
    departureTime: '8:00',
    arrivalTime: '10:00',
    duration: '14h 30m',
    departureAirport: 'SIN',
    arrivalAirport: 'JFK',
    benefits: [
      {
        id: '1',
        name: 'baggage',
        description: '23kg',
      },
      {
        id: '2',
        name: 'meal',
        description: 'Meal included',
      },
    ],
    stops: [],
    isRoundTrip: true,
  },
  {
    id: '2',
    origin: 'Singapore',
    price: 304.99,
    destination: 'Saigon',
    cabinClass: 'first',
    airline: {
      id: '2',
      name: 'Draco Airlines',
      logo: 'https://avatar.vercel.sh/draco-airlines',
    },
    aircraftType: 'Boeing 777-300ER',
    departureTime: '8:00',
    arrivalTime: '10:00',
    duration: '14h 30m',
    departureAirport: 'SIN',
    arrivalAirport: 'JFK',
    benefits: [
      {
        id: '1',
        name: 'baggage',
        description: '23kg',
      },
      {
        id: '2',
        name: 'meal',
        description: 'Meal included',
      },
    ],
    stops: ['HKG', 'LAX'],
    isRoundTrip: true,
  },
  {
    id: '3',
    origin: 'Singapore',
    price: 304.99,
    destination: 'Saigon',
    cabinClass: 'business',
    airline: {
      id: '3',
      name: 'Boeing Airlines',
      logo: 'https://avatar.vercel.sh/boeing-airlines',
    },
    aircraftType: 'Boeing 777-300ER',
    departureTime: '8:00',
    arrivalTime: '10:00',
    duration: '14h 30m',
    departureAirport: 'SIN',
    arrivalAirport: 'JFK',
    benefits: [
      {
        id: '1',
        name: 'baggage',
        description: '23kg',
      },
      {
        id: '2',
        name: 'meal',
        description: 'Meal included',
      },
      {
        id: '3',
        name: 'wifi',
        description: 'Wifi available',
      },
      {
        id: '4',
        name: 'entertainment',
        description: 'In-flight entertainment',
      },
    ],
    stops: ['HKG', 'LAX', 'JFK'],
    isRoundTrip: true,
  },
  {
    id: '4',
    origin: 'Singapore',
    price: 600,
    destination: 'Saigon',
    cabinClass: 'economy',
    airline: {
      id: '4',
      name: 'Airbus Airlines',
      logo: 'https://avatar.vercel.sh/airbus-airlines',
    },
    aircraftType: 'Boeing 777-300ER',
    departureTime: '8:00',
    arrivalTime: '10:00',
    duration: '14h 30m',
    departureAirport: 'SIN',
    arrivalAirport: 'JFK',
    benefits: [
      {
        id: '1',
        name: 'baggage',
        description: '23kg',
      },
      {
        id: '2',
        name: 'meal',
        description: 'Meal included',
      },
    ],
    stops: ['HKG'],
    isRoundTrip: true,
  },
];

export const defaultAirlines: Airline[] = [
  {
    id: '1',
    name: 'Singapore Airlines',
    logo: 'https://avatar.vercel.sh/singapore-airlines',
  },
  {
    id: '2',
    name: 'Draco Airlines',
    logo: 'https://avatar.vercel.sh/draco-airlines',
  },
  {
    id: '3',
    name: 'Boeing Airlines',
    logo: 'https://avatar.vercel.sh/boeing-airlines',
  },
  {
    id: '4',
    name: 'Airbus Airlines',
    logo: 'https://avatar.vercel.sh/airbus-airlines',
  },
];

export const defaultCabinClasses: CabinClassEnum[] = [
  'business',
  'economy',
  'first',
  'premium',
];

export const defaultBenefits: BenefitEnum[] = [
  'meal',
  'baggage',
  'wifi',
  'entertainment',
];
