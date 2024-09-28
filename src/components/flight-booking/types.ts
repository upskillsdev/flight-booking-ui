import { z } from 'zod';

import { flightFilterSchema } from './flight-filter-form/schema';

export type StopEnum = 'any' | 'direct' | '1stop' | '2+stops';
export type BenefitEnum = 'meal' | 'baggage' | 'entertainment' | 'wifi';
export type CabinClassEnum = 'economy' | 'premium' | 'business' | 'first';
export interface Benefit {
  id: string;
  name: BenefitEnum;
  description?: string;
}

export interface Airline {
  id: string;
  name: string;
  logo: string;
}

export interface Flight {
  id: string;
  origin: string;
  price: number;
  destination: string;
  cabinClass: CabinClassEnum;
  airline: Airline;
  aircraftType: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureAirport: string;
  arrivalAirport: string;
  benefits: Benefit[];
  stops: string[];
  isRoundTrip: boolean;
}

export type FlightFilterFormData = z.infer<typeof flightFilterSchema>;

export type SearchFlightParams = {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  cabinClass: string;
};

export type FlightSortKey =
  | 'cheapest'
  | 'direct'
  | 'earliest-departure'
  | 'latest-departure'
  | 'earliest-arrival'
  | 'latest-arrival';
