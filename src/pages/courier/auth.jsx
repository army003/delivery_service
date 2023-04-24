import 'twin.macro';

import React from 'react';
import { useForm } from 'react-hook-form';
import { TbTruckDelivery } from 'react-icons/tb';
import tw from 'twin.macro';

import { BigTitle, Input2 } from '@/components';
function CourierAuth() {
  const { control, getValues } = useForm({});

  return (
    <div tw=' h-[100vh] w-[100vw] flex justify-center items-center'>
      <div>
        <div tw='flex items-center justify-center gap-2'>
          <BigTitle text={'Sign In'} variant={'bold'} twStyle={tw`text-center`} />
          <TbTruckDelivery size={40} />
        </div>
        <div tw='bg-secondary p-5 rounded-2xl bg-black text-white w-[20vw]'>
          <Input2
            name='number'
            control={control}
            label={'Mobile number'}
            mask={'+7 999 999 99 99'}
            placeholder={'Insert the mobile number'}
          />
          <Input2 name='address' control={control} label={'Password'} placeholder={'Insert the address'} />
        </div>
      </div>
    </div>
  );
}

export default CourierAuth;
