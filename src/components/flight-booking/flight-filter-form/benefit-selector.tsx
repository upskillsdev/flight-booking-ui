import { CheckboxGroupData, CheckboxGroupField } from '../form-fields/';
import { useFormContext } from 'react-hook-form';

import { BENEFIT_MAPPING } from '../constants';
import { BenefitEnum, FlightFilterFormData } from '../types';
import { getBenefitIcon } from '../utils';

type BenefitSelectorProps = {
  benefits: BenefitEnum[];
};

export const BenefitSelector = ({ benefits }: BenefitSelectorProps) => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const checkboxGroupData: CheckboxGroupData[] | undefined = benefits.map(
    (benefit) => ({
      value: benefit,
      label: BENEFIT_MAPPING[benefit],
      endContent: getBenefitIcon(benefit),
    })
  );

  return (
    <CheckboxGroupField
      name="benefits"
      label="Facilities"
      size="sm"
      control={control}
      formState={formState}
      data={checkboxGroupData}
    />
  );
};
