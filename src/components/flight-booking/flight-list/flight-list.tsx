import { Spacer } from '@nextui-org/react';
import { Subtle } from '../typography';

import { FlightCard } from '../flight-card';
import { Flight } from '../types';

type FlightListProps = {
  data: Flight[];
};

export const FlightList = ({ data }: FlightListProps) => {
  const handleFlightCardPress = (id: Flight['id']) => {
    alert(`Flight ${id} clicked`);
  };

  const renderHeader = () => (
    <>
      <Spacer y={4} />
      <div className="flex items-center justify-between px-4">
        <p className="font-semibold">Search results</p>
        <p className="text-primary text-xs">{data.length} Flight(s)</p>
      </div>
      <Spacer y={4} />
    </>
  );

  if (!data.length) {
    return (
      <div>
        {renderHeader()}
        <div className="mt-8 flex flex-col items-center justify-center">
          <Subtle>No flights found</Subtle>
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderHeader()}
      <div className="flex w-full flex-col gap-2 px-4 pb-4">
        {data.map((flight) => (
          <FlightCard
            key={flight.id}
            onPress={handleFlightCardPress}
            {...flight}
          />
        ))}
      </div>
    </div>
  );
};
