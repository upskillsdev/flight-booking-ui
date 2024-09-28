import { Control, FieldPath, FieldValues, FormState } from 'react-hook-form';

export type ControlledFormFieldProps<T extends FieldValues = FieldValues> = {
  formState: FormState<T>;
  name: FieldPath<T>;
  control: Control<FieldValues>;
};
