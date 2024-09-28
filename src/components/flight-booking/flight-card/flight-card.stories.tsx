import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultFlights } from '../data';
import { FlightCard } from './flight-card';

const meta: Meta<typeof FlightCard> = {
  component: FlightCard,
  title: 'Tutorials/Flight Booking UI/Components/Flight Card',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FlightCard>;

const baseArgs: Story['args'] = {
  ...defaultFlights[1],
  onPress: (id) => {
    alert(`Flight with id ${id} clicked`);
  },
};

export const Default: Story = {
  args: baseArgs,
};
