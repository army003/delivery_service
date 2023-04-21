/* eslint-disable jsx-a11y/no-static-element-interactions */
import 'twin.macro';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { getOrderMaked, setOrder, setOrderDetail } from '@/app/store/slices/order';
import Sofa from '@/assets/sofa.png';
import { BigTitle, Button, Select, SubTitle, Title } from '@/components';

function ProductPage() {
  const [price, setPrice] = useState(0);
  const { control, watch } = useForm({});
  const dispatch = useDispatch();

  const isOrderMaked = useSelector(getOrderMaked);
  const navigate = useNavigate();
  const quantity = [
    { value: '1', label: 1 },
    { value: '2', label: 2 },
    { value: '3', label: 3 },
    { value: '4', label: 4 },
    { value: '5', label: 5 }
  ];
  useEffect(() => {
    if (watch('quantity')) {
      const price = parseInt(watch('quantity')) * 500000;
      setPrice(price);
    }
  }, [watch('quantity')]);

  const handleClickOrder = () => {
    dispatch(setOrder({ order_maked: true }));
    dispatch(setOrderDetail({ name: 'Chair', id: 2, quantity: 1 }));
  };
  return (
    <div tw='w-full flex justify-between'>
      <div tw='w-[50%]'>
        <img src={Sofa} alt='' tw='rounded-2xl' />
      </div>
      {isOrderMaked ? (
        <Outlet />
      ) : (
        <div tw='flex flex-col gap-7 w-[45%]'>
          <div>
            <BigTitle text={'Название продукта'} variant={'bold'} />
            <Title text={'Тип продукта'} variant={'bold'} />
          </div>
          <div tw='bg-black text-white shadow-2xl rounded-2xl max-w-[200px] px-5 py-3 flex justify-center'>
            <Title text={'500 000 ₸'} variant={'bold'} />
          </div>
          <div tw='bg-secondary p-10 font-bold'>Информация про поставщика</div>
          <Select options={quantity} control={control} name={'quantity'} placeholder={'Выберите количество'} />
          <SubTitle text={`Final Price: ${price} ₸`} variant={'bold'} twStyle={tw`ml-2 text-secondary`} />
          <div tw='flex gap-5' onClick={handleClickOrder}>
            <Button variant={'secondary'}>Order</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
