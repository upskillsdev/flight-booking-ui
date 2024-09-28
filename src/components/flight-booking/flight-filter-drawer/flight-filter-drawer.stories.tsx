import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultAirlines, defaultBenefits, defaultCabinClasses } from '../data';
import { FlightFilterDrawer } from './flight-filter-drawer';

const meta: Meta<typeof FlightFilterDrawer> = {
  component: FlightFilterDrawer,
  title: 'Tutorials/Flight Booking UI/Components/Flight Filter Drawer',
  decorators: [
    (Story) => (
      <ScreenContainer className="px-4">
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FlightFilterDrawer>;

const baseArgs: Story['args'] = {
  airlines: defaultAirlines,
  benefits: defaultBenefits,
  cabinClasses: defaultCabinClasses,
  initialFilterData: {
    airlines: [],
    benefits: [],
    cabinClasses: [],
  },
  onFormSubmit: (data) => {
    alert(JSON.stringify(data, null, 2));
  },
};

export const Default: Story = {
  args: baseArgs,
};
