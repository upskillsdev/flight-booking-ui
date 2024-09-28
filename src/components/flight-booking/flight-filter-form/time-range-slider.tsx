import { DateFormatter, Time } from '@internationalized/date';
import { SliderProps } from '@nextui-org/react';
import { SliderField, SliderFieldProps } from '../form-fields/';
import { Subtle } from '../typography';
import { useFormContext } from 'react-hook-form';

import { FlightFilterFormData } from '../types';

type TimeRangeSliderProps = SliderProps &
  Pick<SliderFieldProps<FlightFilterFormData>, 'name'>;

export const TimeRangeSlider = (props: TimeRangeSliderProps) => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const minTime = props.minValue || 0;
  const maxTime = props.maxValue || 0;

  const formatTime = (value: number) => {
    const dateFormatter = new DateFormatter('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const time = new Time(value, 0);
    const date = new Date();
    date.setHours(time.hour, time.minute);
    return dateFormatter.format(new Date(date));
  };

  const renderCustomValue = (value: SliderProps['value']) => {
    if (typeof value === 'object') {
      return `${formatTime(value[0])} - ${formatTime(value[1])}`;
    }
  };

  return (
    <SliderField
      control={control}
      formState={formState}
      size="sm"
      step={1}
      startContent={<Subtle className="text-xs">{formatTime(minTime)}</Subtle>}
      endContent={<Subtle className="text-xs">{formatTime(maxTime)}</Subtle>}
      renderCustomValue={renderCustomValue}
      {...props}
    />
  );
};
