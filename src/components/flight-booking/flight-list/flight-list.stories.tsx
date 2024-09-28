import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultFlights } from '../data';
import { FlightList } from './flight-list';

const meta: Meta<typeof FlightList> = {
  component: FlightList,
  title: 'Tutorials/Flight Booking UI/Components/Flight List',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FlightList>;

const baseArgs: Story['args'] = {
  data: defaultFlights,
};

export const Default: Story = {
  args: baseArgs,
};

export const Empty: Story = {
  args: {
    data: [],
  },
};
