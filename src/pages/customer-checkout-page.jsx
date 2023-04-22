import 'twin.macro';

import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { useCreateCustomerMutation } from '@/app/api/application';
import { getOrderDetail, setCustomerInfo } from '@/app/store/slices/order';
import { BigTitle, Button, Input2, Title } from '@/components';

function CustomerCheckoutPage() {
  const { control, getValues } = useForm({});
  const [createCustomer, { data, isSuccess }] = useCreateCustomerMutation();
  const order_detail = useSelector(getOrderDetail);
  const product_id = useLocation().pathname.split('/')[2];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickNext = () => {
    const values = getValues();
    createCustomer(values);
  };

  useEffect(() => {
    if (isSuccess) {
      const values = getValues();
      dispatch(setCustomerInfo(values));
      navigate(`/product/${product_id}/delivery-info`, { state: { customer_id: data?.id } });
    }
  }, [isSuccess]);

  return (
    <div tw='flex flex-col gap-7 w-[45%]'>
      {order_detail ? (
        <>
          <div>
            <BigTitle text={'Making an order'} variant={'bold'} />
            <Title text={'Fill in the information about yourself'} variant={'bold'} />
          </div>
          <div tw='bg-secondary w-full p-5 rounded-2xl flex flex-col gap-2'>
            <Input2 name='name' control={control} label={'Name'} placeholder={'Insert the name'} />
            <Input2
              name='number'
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
            <Button variant={'primary'} onClick={handleClickNext}>
              Next
            </Button>
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

export default CustomerCheckoutPage;
