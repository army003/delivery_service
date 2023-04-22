/* eslint-disable jsx-a11y/no-static-element-interactions */
import 'twin.macro';

import React from 'react';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import tw from 'twin.macro';

import { getCustomerDetail, getDeliveryDetail, getOrderDetail } from '@/app/store/slices/order';
import { BigTitle, BodyText, Button, Modal, SubTitle, Title } from '@/components';
import { useCreateOrderMutation } from '@/app/api/application';
import { useEffect } from 'react';

function ConfirmationPage() {
  const [open, setOpen] = useState(false);
  const delivery = useSelector(getDeliveryDetail);
  const customer = useSelector(getCustomerDetail);
  const order = useSelector(getOrderDetail);
  const [custCheck, setCustCheck] = useState(false);
  const [orCheck, setOrCheck] = useState(false);
  const [delCheck, setDelCheck] = useState(false);
  const [createOrder, { isSuccess }] = useCreateOrderMutation();
  const customer_info = [
    { label: 'Name', value: customer.name },
    { label: 'Mobile number', value: customer.mobile_number },
    { label: 'Delivery address', value: customer.address }
  ];

  const order_info = [
    { label: 'Product', value: order?.name },
    { label: 'Qunatity', value: order?.quantity },
    { label: 'Price', value: order?.price }
  ];

  const delivery_info = [
    { label: 'Approximate date', value: delivery.delivery_date },
    { label: 'Approximate time', value: delivery.delivery_time }
  ];

  const handleCreateOrder = () => {
    createOrder(delivery);
  };

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
    }
  }, [isSuccess]);
  return (
    <div tw='flex flex-col gap-7 w-[45%]'>
      {delivery ? (
        <>
          <div>
            <BigTitle text={'Confrimation'} variant={'bold'} />
            <Title text={'Please confirm delivery information below'} variant={'bold'} />
          </div>
          <div
            tw='bg-secondary w-full p-5 rounded-2xl flex flex-col gap-2 relative'
            css={[!custCheck && tw`opacity-40`]}
          >
            <SubTitle text={'Personal Info'} variant={'bold'} />
            <div tw='flex flex-col'>
              {customer_info.map(item => (
                <BodyText
                  text={
                    <span>
                      <b>{item.label}</b>: {item.value}
                    </span>
                  }
                  key={item.value}
                />
              ))}
            </div>
            <span
              tw='w-[25px] h-[25px] rounded-full border border-black absolute top-5 right-5 flex justify-center items-center'
              onClick={() => setCustCheck(!custCheck)}
            >
              {custCheck && <AiOutlineCheck />}
            </span>
          </div>
          <div tw='bg-secondary w-full p-5 rounded-2xl flex flex-col gap-2 relative' css={[!orCheck && tw`opacity-40`]}>
            <SubTitle text={'Order Info'} variant={'bold'} />
            <div tw='flex flex-col'>
              {order_info.map(item => (
                <BodyText
                  text={
                    <span>
                      <b>{item.label}</b>: {item.value}
                    </span>
                  }
                  key={item.value}
                />
              ))}
            </div>
            <span
              tw='w-[25px] h-[25px] rounded-full border border-black absolute top-5 right-5 flex justify-center items-center'
              onClick={() => setOrCheck(!orCheck)}
            >
              {orCheck && <AiOutlineCheck />}
            </span>
          </div>
          <div
            tw='bg-secondary w-full p-5 rounded-2xl flex flex-col gap-2 relative'
            css={[!delCheck && tw`opacity-40`]}
          >
            <SubTitle text={'Delivery Info'} variant={'bold'} />
            <div tw='flex flex-col'>
              {delivery_info.map(item => (
                <BodyText
                  text={
                    <span>
                      <b>{item.label}</b>: {item.value}
                    </span>
                  }
                  key={item.value}
                />
              ))}
            </div>
            <span
              tw='w-[25px] h-[25px] rounded-full border border-black absolute top-5 right-5 flex justify-center items-center'
              onClick={() => setDelCheck(!delCheck)}
            >
              {delCheck && <AiOutlineCheck />}
            </span>
          </div>
        </>
      ) : (
        <div tw='w-full h-full flex items-center justify-center'>
          <ClipLoader />
        </div>
      )}
      <Button variant={'secondary'} onClick={handleCreateOrder} disabled={!orCheck || !custCheck || !delCheck}>
        Order
      </Button>
      <Modal open={open} setOpen={setOpen}>
        <SubTitle text={'Order succesfully created!'} />
      </Modal>
    </div>
  );
}

export default ConfirmationPage;
