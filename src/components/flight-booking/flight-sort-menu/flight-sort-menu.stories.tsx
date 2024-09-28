import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { FlightSortMenu } from './flight-sort-menu';

const meta: Meta<typeof FlightSortMenu> = {
  component: FlightSortMenu,
  title: 'Tutorials/Flight Booking UI/Components/Flight Sort Menu',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FlightSortMenu>;

const baseArgs: Story['args'] = {
  onSortChange: (data) => alert(data),
};

export const Default: Story = {
  args: baseArgs,
};
