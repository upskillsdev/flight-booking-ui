import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@heroui/react";
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import {
  Airline,
  BenefitEnum,
  CabinClassEnum,
  FlightFilterFormData,
} from '../types';
import { AirlineSelector } from './airline-selector';
import { BenefitSelector } from './benefit-selector';
import { CabinSelector } from './cabin-class-selector';
import { PriceRangeSlider } from './price-range-slider';
import { flightFilterSchema } from './schema';
import { StopSelector } from './stop-selector';
import { TimeRangeSlider } from './time-range-slider';

type FlightFilterFormProps = {
  initialData: FlightFilterFormData;
  airlines: Airline[];
  benefits: BenefitEnum[];
  cabinClasses: CabinClassEnum[];
  onSubmit: (data: FlightFilterFormData) => void;
};

export const defaultFlightFilterValues: FlightFilterFormData = {
  departureTimeRange: undefined,
  arrivalTimeRange: undefined,
  priceRange: undefined,
  airlines: undefined,
  stops: undefined,
  cabinClasses: undefined,
  benefits: undefined,
};

export const FlightFilterForm = ({
  airlines,
  benefits,
  cabinClasses,
  initialData,
  onSubmit,
}: FlightFilterFormProps) => {
  const formReturns = useForm<FlightFilterFormData>({
    defaultValues: defaultFlightFilterValues,
    mode: 'onChange',
    resolver: zodResolver(flightFilterSchema),
  });

  const { reset, handleSubmit } = formReturns;

  const minPrice = initialData.priceRange?.[0];
  const maxPrice = initialData.priceRange?.[1];
  const minDepartureTime = initialData.departureTimeRange?.[0];
  const maxDepartureTime = initialData.departureTimeRange?.[1];
  const minArrivalTime = initialData.arrivalTimeRange?.[0];
  const maxArrivalTime = initialData.arrivalTimeRange?.[1];

  React.useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  const handleOnSubmit: SubmitHandler<FlightFilterFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...formReturns}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="bg-content1">
        <div className="flex flex-col gap-6 px-4 pt-4">
          <PriceRangeSlider minValue={minPrice} maxValue={maxPrice} />
          <TimeRangeSlider
            name="departureTimeRange"
            label="Departure Time"
            minValue={minDepartureTime}
            maxValue={maxDepartureTime}
          />
          <TimeRangeSlider
            name="arrivalTimeRange"
            label="Arrival Time"
            minValue={minArrivalTime}
            maxValue={maxArrivalTime}
          />
          <AirlineSelector data={airlines} />
          <CabinSelector cabinClasses={cabinClasses} />
          <StopSelector />
          <BenefitSelector benefits={benefits} />
        </div>
        <div className="bg-content1 sticky bottom-0 z-10 mt-2 px-4 py-2">
          <Button type="submit" size="sm" color="primary" fullWidth>
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
