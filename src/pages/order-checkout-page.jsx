import 'twin.macro';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { getCustomerDetail } from '@/app/store/slices/order';
import { BigTitle, Button, Input2, Title } from '@/components';

function OrderCheckoutPage() {
  const { control } = useForm({});
  const customer_detail = useSelector(getCustomerDetail);
  return (
    <div tw='flex flex-col gap-7 w-[45%]'>
      {customer_detail ? (
        <>
          <div>
            <BigTitle text={'Making an order'} variant={'bold'} />
            <Title text={'Fill in the delivery information'} variant={'bold'} />
          </div>
          <div tw='bg-secondary w-full p-5 rounded-2xl flex flex-col gap-2'>
            <Input2 name='name' control={control} label={'Name'} placeholder={'Insert the name'} />
            <Input2 name='last_name' control={control} label={'Last name'} placeholder={'Insert the last name'} />
            <Input2
              name='mobile_number'
              control={control}
              label={'Mobile number'}
              mask={'+7 999 999 99 99'}
              placeholder={'Insert the mobile number'}
            />
            <Input2
              name='address'
              control={control}
              label={'Address (for delivery)'}
              placeholder={'Insert the address'}
            />
          </div>
          <div tw='w-full flex justify-end'>
            <Button variant={'primary'}>Next</Button>
          </div>
        </>
      ) : (
        <div tw='w-full h-full flex items-center justify-center'>
          <ClipLoader />
        </div>
      )}
    </div>
  );
}

export default OrderCheckoutPage;
