import { Slider } from '@nextui-org/react';
import { Subtle } from '../typography';

import { Flight } from '../types';

type FlightTimelineProps = {
  totalStops: number;
} & Pick<
  Flight,
  | 'departureTime'
  | 'arrivalTime'
  | 'departureAirport'
  | 'arrivalAirport'
  | 'duration'
>;

export const FlightTimeline = ({
  arrivalAirport,
  arrivalTime,
  departureAirport,
  departureTime,
  duration,
  totalStops,
}: FlightTimelineProps) => {
  const totalSteps = totalStops + 1;

  let stopText = 'Direct';
  if (totalStops === 1) {
    stopText = '1 stop';
  } else if (totalStops > 1) {
    stopText = `${totalStops} stops`;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Subtle className="-mb-2 text-xs">{duration}</Subtle>
      <Slider
        size="sm"
        step={1}
        defaultValue={totalSteps}
        maxValue={totalSteps}
        minValue={0}
        color="foreground"
        showSteps={true}
        className="max-w-md"
        isDisabled
        aria-label={`Flight timeline from ${departureAirport} to ${arrivalAirport}`}
        startContent={
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-xs">{departureTime}</p>
            <Subtle className="text-xs">{departureAirport}</Subtle>
          </div>
        }
        endContent={
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-xs">{arrivalTime}</p>
            <Subtle className="text-xs">{arrivalAirport}</Subtle>
          </div>
        }
        classNames={{
          thumb: 'hidden',
          value: 'hidden',
          track: 'bg-foreground h-[1px]',
          step: 'bg-foreground w-[4px] h-[4px]',
        }}
      />
      <Subtle className="-mt-2 text-xs">{stopText}</Subtle>
    </div>
  );
};
