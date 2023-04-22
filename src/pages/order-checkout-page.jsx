import 'twin.macro';

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { getCustomerDetail, getOrderDetail, setDelveryInfo } from '@/app/store/slices/order';
import { BigTitle, Button, Input2, Title } from '@/components';
import DatePickerInput from '@/views/date-picke-input';

function OrderCheckoutPage() {
  const [time, setTime] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const { control, getValues, setValue } = useForm({});
  const customer_detail = useSelector(getCustomerDetail);
  const order_detail = useSelector(getOrderDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product_id = useLocation().pathname.split('/')[2];
  const order = useSelector(getOrderDetail);

  const {
    state: { customer_id }
  } = useLocation();

  const handleClick = () => {
    dispatch(
      setDelveryInfo({
        customer_id: customer_id,
        product_id: product_id,
        delivery_date: getValues('date'),
        delivery_time: time,
        quantity: order_detail.quantity,
        price: order?.price,
        supplier_id: order_detail.supplier_id
      })
    );
    navigate(`/product/${product_id}/confirmation`);
  };

  return (
    <div tw='flex flex-col gap-7 w-[45%]'>
      {customer_detail ? (
        <>
          <div>
            <BigTitle text={'Making an order'} variant={'bold'} />
            <Title text={'Fill in the delivery information'} variant={'bold'} />
          </div>
          <div tw='bg-secondary w-full p-5 rounded-2xl flex flex-col gap-2'>
            <DatePickerInput
              label={'Approximate date'}
              control={control}
              setStartDate={setStartDate}
              startDate={startDate}
              getValues={getValues}
              setTime={setTime}
              name={'date'}
              setValue={setValue}
            />
            <Input2
              name='name'
              disabled={true}
              value={time}
              control={control}
              label={'Approximate time'}
              placeholder={time}
            />
          </div>
          <div tw='w-full flex justify-end'>
            <Button variant={'primary'} onClick={handleClick}>
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

export default OrderCheckoutPage;
