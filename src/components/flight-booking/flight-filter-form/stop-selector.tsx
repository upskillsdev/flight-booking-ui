import { CheckboxGroupData, CheckboxGroupField } from '../form-fields/';
import { useFormContext } from 'react-hook-form';

import { STOP_MAPPING } from '../constants';
import { FlightFilterFormData } from '../types';

export const StopSelector = () => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const checboxGroupData: CheckboxGroupData[] | undefined = Object.entries(
    STOP_MAPPING
  ).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  return (
    <CheckboxGroupField
      name="stops"
      label="Number of Stops"
      size="sm"
      control={control}
      formState={formState}
      data={checboxGroupData}
    />
  );
};
