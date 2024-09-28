import { Chip } from '@nextui-org/react';

import { Flight } from '../types';
import { formatNumber } from '../utils';

type FlightFareDetailsProps = Pick<Flight, 'price' | 'isRoundTrip'>;

export const FlightFareDetails = ({
  price,
  isRoundTrip,
}: FlightFareDetailsProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-warning truncate break-words text-xs font-semibold">
        {formatNumber(price, 'USD')} / pax
      </p>
      {isRoundTrip && (
        <Chip size="sm" variant="flat" color="primary" className="text-xs">
          Round trip
        </Chip>
      )}
    </div>
  );
};
