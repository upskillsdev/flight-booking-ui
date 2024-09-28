import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultAirlines, defaultBenefits, defaultCabinClasses } from '../data';
import { FlightFilterForm } from './flight-filter-form';

const meta: Meta<typeof FlightFilterForm> = {
  component: FlightFilterForm,
  title: 'Tutorials/Flight Booking UI/Components/Flight Filter Form',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FlightFilterForm>;

const baseArgs: Story['args'] = {
  airlines: defaultAirlines,
  cabinClasses: defaultCabinClasses,
  benefits: defaultBenefits,
  initialData: {
    airlines: [],
    cabinClasses: [],
    benefits: [],
    arrivalTimeRange: [0, 23],
    departureTimeRange: [0, 23],
    priceRange: [0, 1000],
    stops: [],
  },
  onSubmit: (data) => alert(JSON.stringify(data, null, 2)),
};

export const Default: Story = {
  args: baseArgs,
};
