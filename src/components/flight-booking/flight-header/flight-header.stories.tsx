import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useScroll } from 'framer-motion';

import { ScreenContainer } from '../../../components';
import { defaultSearchFlightParams } from '../data';
import { FlightHeader } from './flight-header';

const meta: Meta<typeof FlightHeader> = {
  component: FlightHeader,
  title: 'Tutorials/Flight Booking UI/Components/Flight Header',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FlightHeader>;

const baseArgs: Story['args'] = {
  ...defaultSearchFlightParams,
};

export const Default: Story = {
  args: baseArgs,
};

const MockContent = () => (
  <div className="bg-content2 flex h-[800px] flex-1 flex-col items-center">
    <p>content...</p>
    <p>content...</p>
    <p>content...</p>
    <p>content...</p>
    <br />
    <p>Scroll to see the header hide on scroll</p>
    <br />
    <p>content...</p>
    <p>content...</p>
    <p>content...</p>
    <p>content...</p>
  </div>
);

export const StickyHeader: Story = {
  decorators: [
    (Story) => {
      return (
        <ScreenContainer className="py-0">
          <div className="max-h-[500px] overflow-y-scroll">
            <Story
              args={{
                ...baseArgs,
                sticky: true,
              }}
            />
            <MockContent />
          </div>
        </ScreenContainer>
      );
    },
  ],
};

export const HideOnScroll: Story = {
  decorators: [
    (Story) => {
      const containerRef = React.useRef<HTMLDivElement>(null);
      const { scrollYProgress } = useScroll({
        container: containerRef,
      });

      return (
        <ScreenContainer className="py-0">
          <div ref={containerRef} className="max-h-[500px] overflow-y-scroll">
            <Story
              args={{
                ...baseArgs,
                sticky: true,
                shouldHideOnScroll: true,
                parentScrollY: scrollYProgress,
              }}
            />
            <MockContent />
          </div>
        </ScreenContainer>
      );
    },
  ],
};
