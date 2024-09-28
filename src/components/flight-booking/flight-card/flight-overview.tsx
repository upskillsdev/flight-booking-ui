import { Subtle } from '../typography';

import { CABIN_CLASS_MAPPING } from '../constants';
import { Flight } from '../types';
import { AirlineLogo } from './airline-logo';

type FlightOverviewProps = Pick<
  Flight,
  'airline' | 'cabinClass' | 'aircraftType'
>;

export const FlightOverview = ({
  airline,
  cabinClass,
  aircraftType,
}: FlightOverviewProps) => {
  return (
    <div className="flex flex-1 justify-between">
      <div className="flex flex-col items-start gap-1">
        <p className="text-sm font-semibold">{airline.name}</p>
        <div className="flex items-center justify-around gap-1">
          <Subtle className="text-xs">{CABIN_CLASS_MAPPING[cabinClass]}</Subtle>
          <Subtle className="text-xs">•</Subtle>
          <Subtle className="text-xs">{aircraftType}</Subtle>
        </div>
      </div>
      <AirlineLogo src={airline.logo} />
    </div>
  );
};
