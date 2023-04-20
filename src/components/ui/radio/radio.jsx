import React from 'react';
import { useController } from 'react-hook-form';
import tw from 'twin.macro';

import { BodyText } from '../body-text/body-text';
import { Caption } from '../caption/caption';
import { SubBody } from '../sub-body/sub-body';

/* {
  value: string;
  title: string;
  subText?: string;
  sale?: string;
}*/

const styles = {
  container: ({ disabled }) => [tw`max-w-button max-w-full min-w-button w-full relative`, disabled && tw`opacity-50`]
};

const Radio = props => {
  const {
    field: { onChange, name, ref },
    fieldState: { error }
  } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules
  });

  return (
    <div tw='flex flex-col space-y-[1px] mt-5'>
      {props?.options?.map((radio, idx) => (
        <div key={radio.value} tw='bg-secondary px-5 py-1 last:sm:rounded-b-2xl'>
          <div className='flex items-center mr-4 mb-4'>
            <input
              id={radio.value}
              type='radio'
              name={name}
              className='hidden'
              value={radio.value}
              ref={ref}
              defaultChecked={idx === 0}
              onChange={onChange}
            />
            <label htmlFor={radio.value} className='flex items-center cursor-pointer text-xl max-w-button'>
              <span className='w-[0.9375rem] h-[0.9375rem] bg-primary inline-block mr-2 rounded-full border border-checkbox flex-shrink-0' />
              <div tw='flex flex-col'>
                <SubBody text={radio.title} variant='bold' />
                <Caption text={radio.subText || ''} twStyle={tw`text-secondary`} />
              </div>
            </label>
          </div>
          {radio.sale && (
            <div tw='absolute mt-4 right-[4px] sm:right-7 sm:mt-0 -top-3 w-[3.44rem] h-[1.85rem] bg-button flex justify-center items-center rounded-[10px] -rotate-12 shadow-button text-white'>
              <BodyText text={`-${radio.sale}%`} variant='bold' />
            </div>
          )}
        </div>
      ))}
      {error && <Caption text={error.message || ''} twStyle={tw`text-error -mt-4`} />}
    </div>
  );
};

export { Radio };
