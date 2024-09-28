import { Flight, FlightFilterFormData } from '../types';

export const processFlightFilterData = (flights: Flight[]) => {
  const airlines = flights.map((flight) => flight.airline);
  const cabinClasses = flights
    .map((flight) => flight.cabinClass)
    .filter((value, index, self) => self.indexOf(value) === index);
  const benefits = flights
    .flatMap((flight) => flight.benefits.map((benefit) => benefit.name))
    .filter((value, index, self) => self.indexOf(value) === index);
  const minFlightPrice = Math.min(...flights.map((flight) => flight.price));
  const maxFlightPrice = Math.max(...flights.map((flight) => flight.price));

  const initialFilterData: FlightFilterFormData = {
    airlines: [],
    departureTimeRange: [0, 23],
    arrivalTimeRange: [0, 23],
    priceRange: [minFlightPrice, maxFlightPrice],
    cabinClasses: [],
    stops: [],
    benefits: [],
  };

  return { airlines, cabinClasses, benefits, initialFilterData };
};
