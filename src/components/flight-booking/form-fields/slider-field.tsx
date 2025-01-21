'use client';

import { Slider, SliderProps } from "@heroui/react";
import { Controller, FieldError, FieldValues } from 'react-hook-form';

import { ControlledFormFieldProps } from './types';

export type SliderFieldProps<T extends FieldValues> =
  ControlledFormFieldProps<T> &
    Omit<SliderProps, 'name'> & {
      renderCustomValue?: (value: SliderProps['value']) => React.ReactNode;
    };

export function SliderField<T extends FieldValues>(props: SliderFieldProps<T>) {
  const { name, control, renderCustomValue, ...rest } = props;

  const handleRenderCustomValue = (
    value: SliderProps['value'],
    children: React.ReactNode
  ) => {
    if (value && renderCustomValue) {
      return renderCustomValue(value);
    }
    return children;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, ...fields },
        fieldState: { error, invalid },
      }) => {
        const fieldErrors = error as unknown as FieldError[] | undefined;
        return (
          <div className="flex flex-col items-start justify-center gap-2">
            <Slider
              color={invalid ? 'danger' : 'primary'}
              renderValue={({ children, ...props }) => (
                <output {...props}>
                  {handleRenderCustomValue(fields.value, children)}
                </output>
              )}
              {...rest}
              {...fields}
              onChange={onChange}
            />
            {fieldErrors?.length
              ? fieldErrors.map((error, i) => (
                  <p key={i} className="text-danger text-small font-medium">
                    {error.message}
                  </p>
                ))
              : null}
          </div>
        );
      }}
    />
  );
}
