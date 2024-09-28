import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultFlights } from '../data';
import { FlightPreferences } from './flight-preferences';

const meta: Meta<typeof FlightPreferences> = {
  component: FlightPreferences,
  title: 'Tutorials/Flight Booking UI/Components/Flight Preferences',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FlightPreferences>;

const baseArgs: Story['args'] = {
  flights: defaultFlights,
};

export const Default: Story = {
  args: baseArgs,
};
