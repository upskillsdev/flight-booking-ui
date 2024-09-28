import { SliderProps } from '@nextui-org/react';
import { SliderField } from '../form-fields/';
import { useFormContext } from 'react-hook-form';

import { FlightFilterFormData } from '../types';
import { Subtle } from '../typography';
import { formatNumber } from '../utils';

export const PriceRangeSlider = (props: Omit<SliderProps, 'name'>) => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const minPrice = props.minValue || 0;
  const maxPrice = props.maxValue || 0;

  return (
    <SliderField
      name="priceRange"
      label="Price Range"
      control={control}
      formState={formState}
      size="sm"
      step={10}
      formatOptions={{ style: 'currency', currency: 'USD' }}
      startContent={
        <Subtle className="text-xs">{formatNumber(minPrice, 'USD')}</Subtle>
      }
      endContent={
        <Subtle className="text-xs">{formatNumber(maxPrice, 'USD')}</Subtle>
      }
      {...props}
    />
  );
};
