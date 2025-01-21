'use client';

import React from 'react';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxProps,
} from "@heroui/react";
import {
  Controller,
  ControllerRenderProps,
  FieldError,
  FieldValues,
} from 'react-hook-form';

import { ControlledFormFieldProps } from './types';

export type CheckboxGroupData = {
  value: CheckboxProps['value'];
  label: string;
  endContent?: React.ReactNode;
};

export type CheckboxGroupFieldProps<T extends FieldValues> =
  ControlledFormFieldProps<T> &
    Omit<CheckboxGroupProps, 'name'> & {
      enableSelectAll?: boolean;
      data?: CheckboxGroupData[];
    };

export function CheckboxGroupField<T extends FieldValues>(
  props: CheckboxGroupFieldProps<T>
) {
  const { name, control, data, label, enableSelectAll = true, ...rest } = props;
  const [isSelectedAll, setIsSelectedAll] = React.useState(false);

  const onSelectAll = (onChange: ControllerRenderProps<T>['onChange']) => {
    return () => {
      if (isSelectedAll) {
        onChange?.([]);
        setIsSelectedAll(false);
        return;
      }
      const allValues = data?.map(({ value }) => value);
      if (allValues?.length) {
        onChange?.(allValues);
      }
      setIsSelectedAll(true);
    };
  };

  const renderGroupLabel = (onChange: ControllerRenderProps<T>['onChange']) => {
    if (!enableSelectAll) {
      return label;
    }

    return (
      <div className="flex w-full items-center justify-between">
        {label}
        <Button
          size="sm"
          color="primary"
          variant="light"
          onClick={onSelectAll(onChange)}
        >
          {isSelectedAll ? 'Deselect All' : 'Select All'}
        </Button>
      </div>
    );
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
          <CheckboxGroup
            color="primary"
            isInvalid={invalid}
            errorMessage={fieldErrors?.[0]?.message}
            label={renderGroupLabel(onChange)}
            {...rest}
            {...fields}
            onValueChange={onChange}
          >
            {data?.map(({ value, label, endContent }) => (
              <Checkbox
                key={value}
                value={value}
                classNames={
                  endContent
                    ? {
                        label: 'w-full',
                        base: 'inline-flex w-full max-w-full',
                      }
                    : undefined
                }
              >
                <div className="flex w-full items-center justify-between gap-2">
                  {label}
                  {endContent}
                </div>
              </Checkbox>
            ))}
          </CheckboxGroup>
        );
      }}
    />
  );
}
