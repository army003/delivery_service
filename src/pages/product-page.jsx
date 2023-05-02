/* eslint-disable jsx-a11y/no-static-element-interactions */
import 'twin.macro';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BsBuildings } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { useGetProductQuery } from '@/app/api/application';
import { getOrderMaked, setOrder, setOrderDetail } from '@/app/store/slices/order';
import Sofa from '@/assets/sofa.png';
import { BigTitle, BodyText, Button, Select, SubTitle, Title } from '@/components';

function ProductPage() {
  const [price, setPrice] = useState(0);
  const { control, watch } = useForm({});
  const dispatch = useDispatch();
  const product_id = useLocation().pathname.split('/')[2];
  const { data } = useGetProductQuery(product_id);

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
      const price = parseInt(watch('quantity')) * data?.data[0]?.price;
      setPrice(price);
    }
  }, [watch('quantity')]);

  const handleClickOrder = () => {
    dispatch(setOrder({ order_maked: true }));
    dispatch(
      setOrderDetail({
        name: 'Chair',
        id: data?.data[0].id,
        quantity: watch('quantity'),
        price: price,
        supplier_id: data?.data[0].supplier_id
      })
    );
    navigate(`/product/${product_id}/customer-info`);
  };
  const transformText = string => {
    const firstLetter = String(string).slice(0, 1).toLocaleUpperCase();
    const next = String(string).slice(1, string?.length);
    return firstLetter + next;
  };
  return (
    <div tw='w-full flex justify-between'>
      <div tw='w-[40%]'>
        <img src={`..${data?.data[0]?.data}`} alt='' tw='rounded-2xl' />
      </div>
      {isOrderMaked ? (
        <Outlet />
      ) : (
        <div tw='flex flex-col gap-7 w-[50%]'>
          <div>
            <BigTitle text={data?.data[0]?.name} variant={'bold'} />
            <Title text={data?.data[0]?.class_name} variant={'bold'} />
          </div>
          <div tw='bg-black text-white shadow-2xl rounded-2xl max-w-[200px] px-5 py-3 flex justify-center'>
            <Title text={`${data?.data[0]?.price} ₸`} variant={'bold'} />
          </div>
          <div tw='bg-secondary p-10 font-bold'>
            <SubTitle text={transformText(data?.data[0]?.supplier_type)} variant={'bold'} />
            <div tw='flex flex-col'>
              <div tw='flex items-center gap-1'>
                <BsBuildings />
                <BodyText text={`${data?.data[0]?.title}`} />
              </div>
              <div tw='flex items-center gap-1'>
                <GoLocation /> <BodyText text={<span>{data?.data[0]?.address}</span>} />
              </div>
            </div>
          </div>
          <Select options={quantity} control={control} name={'quantity'} placeholder={'Choose quantity'} />
          <SubTitle text={`Final Price: ${price} ₸`} variant={'bold'} twStyle={tw`ml-2 text-secondary`} />
          <div tw='flex gap-5' onClick={handleClickOrder}>
            <Button variant={'secondary'} disabled={!watch('quantity')}>
              Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
