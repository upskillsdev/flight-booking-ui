import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';

import { Flight } from '../types';
import { FlightBenefits } from './flight-benefits';
import { FlightFareDetails } from './flight-fare-details';
import { FlightOverview } from './flight-overview';
import { FlightTimeline } from './flight-timeline';

type FlightCardProps = {
  onPress: (id: Flight['id']) => void;
} & Pick<
  Flight,
  | 'id'
  | 'price'
  | 'airline'
  | 'cabinClass'
  | 'aircraftType'
  | 'departureTime'
  | 'arrivalTime'
  | 'duration'
  | 'departureAirport'
  | 'arrivalAirport'
  | 'benefits'
  | 'stops'
  | 'isRoundTrip'
>;

export const FlightCard = ({
  onPress,
  id,
  price,
  airline,
  cabinClass,
  aircraftType,
  departureTime,
  arrivalTime,
  duration,
  departureAirport,
  arrivalAirport,
  benefits,
  stops,
  isRoundTrip,
}: FlightCardProps) => {
  const handlePress = () => {
    onPress(id);
  };

  return (
    <Card isPressable onPress={handlePress} fullWidth radius="sm">
      <CardHeader>
        <FlightOverview
          aircraftType={aircraftType}
          airline={airline}
          cabinClass={cabinClass}
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex items-center justify-between">
          <div className="flex w-3/5 shrink-0">
            <FlightTimeline
              departureTime={departureTime}
              arrivalTime={arrivalTime}
              departureAirport={departureAirport}
              arrivalAirport={arrivalAirport}
              duration={duration}
              totalStops={stops.length}
            />
          </div>
          <FlightFareDetails price={price} isRoundTrip={isRoundTrip} />
        </div>
      </CardBody>
      <CardFooter>
        <FlightBenefits benefits={benefits} />
      </CardFooter>
    </Card>
  );
};
