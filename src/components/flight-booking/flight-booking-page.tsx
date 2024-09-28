import { useScroll } from 'framer-motion';

import { FlightHeader } from './flight-header';
import { FlightList } from './flight-list';
import { FlightPreferences } from './flight-preferences';
import { Flight, SearchFlightParams } from './types';

type FlightBookingPageProps = {
  searchFlightParams: SearchFlightParams;
  flights: Flight[];
};

export const FlightBookingPage = ({
  searchFlightParams: { from, to, departureDate, returnDate, cabinClass },
  flights,
}: FlightBookingPageProps) => {
  const { scrollYProgress } = useScroll();

  const handleBack = () => {
    alert('Back button clicked');
  };

  const handleShareFlight = () => {
    alert('Share button clicked');
  };

  return (
    <div vaul-drawer-wrapper="" className="bg-background">
      <FlightHeader
        parentScrollY={scrollYProgress}
        from={from}
        to={to}
        departureDate={departureDate}
        returnDate={returnDate}
        cabinClass={cabinClass}
        handleBack={handleBack}
        handleShare={handleShareFlight}
        sticky
        shouldHideOnScroll
      />
      <FlightList data={flights} />
      {flights.length > 0 ? <FlightPreferences flights={flights} /> : null}
    </div>
  );
};
