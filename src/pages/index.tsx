import { defaultFlights, defaultSearchFlightParams } from "@/components/flight-booking/data";
import { FlightBookingPage } from "@/components/flight-booking/flight-booking-page";
import { Navbar } from "@/components/navbar";

export default function IndexPage() {
  return (
    <>
    <div className="fixed top-0 w-full">
      <Navbar/>
    </div>
    <div className="max-w-md mx-auto">
      <FlightBookingPage flights={defaultFlights} searchFlightParams={defaultSearchFlightParams}/>
    </div>
    </>
  );
}
