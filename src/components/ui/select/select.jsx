import React from 'react';
import { Controller } from 'react-hook-form';
import RSelect from 'react-select';
import tw from 'twin.macro';

import { Caption, SubBody } from '../../index';

/*SelectProps {
  options: any;
  icon?: ReactJSXElement;
}*/

const Select = ({
  options,
  icon,
  control,
  name,
  rules,
  label,
  placeholder,
  isLoading,
  disabled = false,
  isRequired = false
}) => {
  const styles = icon => ({
    control: provided => [
      { ...provided },
      {
        ...tw`bg-secondary font-normal text-s14  rounded-2xl px-3 py-3 pl-5 shadow-none border border-transparent hover:border-transparent`
      },
      { ...tw`focus-within:border-black` },
      icon && { ...tw`pl-10` }
    ],
    indicatorSeparator: provided => ({ ...provided, ...tw`hidden` }),
    singleValue: (base, { isDisabled }) => {
      const customDisabled = isDisabled ? tw`text-secondary` : tw`text-primary`;
      return {
        ...base,
        ...customDisabled,
        ...tw`font-bold text-s14 m-0`
      };
    },
    input: provided => ({ ...provided, ...tw`text-secondary font-bold text-s14 m-0` }),
    valueContainer: provided => ({ ...provided, ...tw`p-0` }),
    dropdownIndicator: provided => ({ ...provided, ...tw`p-0` }),
    placeholder: provided => ({ ...provided, ...tw`font-normal text-secondary ` }),
    menu: provided => ({ ...provided, ...tw`bg-secondary absolute z-40` }),
    option: (base, { isFocused, isSelected, isDisabled }) => {
      const customSelected = isSelected ? tw`bg-tertiary text-primary` : tw``;
      const customFocused = isFocused ? tw`bg-input` : tw``;
      const customDisabled = isDisabled ? tw`text-secondary` : tw``;
      return { ...base, ...customSelected, ...customFocused, ...customDisabled, ...tw`active:bg-tertiary text-s14` };
    }
  });
  return (
    <div tw='relative w-full min-w-button z-30'>
      {label && (
        <label htmlFor={name} tw='ml-s13 pb-1'>
          <SubBody
            text={
              <span>
                {label}
                {isRequired && <span tw='text-red-500'>*</span>}
              </span>
            }
            variant={''}
          />
        </label>
      )}
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { value, onChange, name, ref }, fieldState: { error } }) => {
          return (
            <>
              <RSelect
                isLoading={isLoading}
                placeholder={placeholder}
                options={options}
                isDisabled={disabled}
                name={name}
                value={options?.find(c => c.value === value) || ''}
                onChange={data => {
                  const { value } = data;
                  onChange(value);
                }}
                styles={styles(icon)}
              />
              {error?.message && (
                <span tw='ml-s13 absolute mt-1'>
                  <Caption text={error?.message || ''} twStyle={tw`text-error`} />
                </span>
              )}
            </>
          );
        }}
      />
      <span tw='absolute inset-y-2 left-1 flex justify-center items-center'>{icon}</span>
    </div>
  );
};

export { Select };
