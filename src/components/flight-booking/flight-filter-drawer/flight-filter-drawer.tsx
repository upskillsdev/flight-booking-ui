import React from 'react';
import { Button } from '@nextui-org/react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../drawer';
import { SlidersHorizontal } from 'lucide-react';

import { FlightFilterForm } from '../flight-filter-form';
import {
  Airline,
  BenefitEnum,
  CabinClassEnum,
  FlightFilterFormData,
} from '../types';

type FlightFilterDrawerProps = {
  airlines: Airline[];
  cabinClasses: CabinClassEnum[];
  benefits: BenefitEnum[];
  initialFilterData: FlightFilterFormData;
  onFormSubmit: (data: FlightFilterFormData) => void;
};

export const FlightFilterDrawer = ({
  airlines,
  benefits,
  cabinClasses,
  initialFilterData,
  onFormSubmit,
}: FlightFilterDrawerProps) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (data: FlightFilterFormData) => {
    onFormSubmit(data);
    setOpen(false);
  };

  return (
    <Drawer
      shouldScaleBackground
      closeThreshold={200}
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger asChild>
        <Button
          fullWidth
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<SlidersHorizontal size={14} />}
        >
          Filter
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90%]">
        <div className="overflow-auto">
          <DrawerHeader>
            <DrawerTitle>Filter</DrawerTitle>
            <DrawerDescription>
              See flights that match your preferences.
            </DrawerDescription>
          </DrawerHeader>
          <FlightFilterForm
            airlines={airlines}
            benefits={benefits}
            cabinClasses={cabinClasses}
            initialData={initialFilterData}
            onSubmit={handleSubmit}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
