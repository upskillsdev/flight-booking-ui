import { CheckboxGroupData, CheckboxGroupField } from '../form-fields/';
import { useFormContext } from 'react-hook-form';

import { CABIN_CLASS_MAPPING } from '../constants';
import { CabinClassEnum, FlightFilterFormData } from '../types';

type CabinSelectorProps = {
  cabinClasses: CabinClassEnum[];
};

export const CabinSelector = ({ cabinClasses }: CabinSelectorProps) => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const checkboxGroupData: CheckboxGroupData[] | undefined = cabinClasses.map(
    (cabinClass) => ({
      value: cabinClass,
      label: CABIN_CLASS_MAPPING[cabinClass],
    })
  );

  return (
    <CheckboxGroupField
      name="cabinClasses"
      label="Cabin Class"
      size="sm"
      control={control}
      formState={formState}
      data={checkboxGroupData}
    />
  );
};
