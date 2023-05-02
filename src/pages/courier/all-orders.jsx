import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BiBed, BiCabinet, BiChair } from 'react-icons/bi';
import { GiHanger, GiMirrorMirror } from 'react-icons/gi';
import { MdOutlineTableRestaurant } from 'react-icons/md';
import { useSelector } from 'react-redux';
import tw from 'twin.macro';

import { useGetOrdersQuery, useTakeOrderMutation } from '@/app/api/application';
import { getUserInfo } from '@/app/store/slices/auth';
import { BodyText, Button, Modal } from '@/components';

function AllOrders() {
  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const { data, refetch } = useGetOrdersQuery();
  const [takeOrder, { isSuccess }] = useTakeOrderMutation();
  const userInfo = useSelector(getUserInfo);

  console.log(userInfo);
  const returnIcon = id => {
    switch (id) {
      case 1:
        return <BiCabinet size={80} color='white' />;
      case 2:
        return <MdOutlineTableRestaurant size={80} color='white' />;
      case 3:
        return <GiHanger size={80} color='white' />;
      case 4:
        return <GiMirrorMirror size={80} color='white' />;
      case 5:
        return <BiChair size={80} color='white' />;
      case 6:
        return <BiBed size={80} color='white' />;
      default:
        break;
    }
  };
  const handleClickTake = item => {
    setActiveCard(item);
    setOpen(true);
  };

  const handleTakeOrder = id => {
    const courier_id = userInfo.id;
    takeOrder({ courier_id, id });
  };
  useEffect(() => {
    if (isSuccess) {
      refetch();
      setOpen(false);
    }
  }, [isSuccess]);
  return (
    <>
      <div tw='w-[950px] mx-auto'>
        <div tw='w-full grid grid-cols-4 gap-5'>
          {data?.map(
            item =>
              item.delivery_status === 'NEW' && (
                <div tw='bg-secondary p-5 rounded-2xl flex flex-col gap-5 relative' key={item.class_id}>
                  <div tw='p-2 rounded-md flex justify-center items-center bg-[#B47AC4]'>
                    {returnIcon(item.class_id)}
                  </div>
                  <div tw='flex flex-col'>
                    <BodyText text={item?.product_name} variant={'bold'} />
                    <BodyText text={new Date(item?.delivery_date).toLocaleDateString()} variant={'bold'} />
                    <BodyText text={item?.address} variant={'bold'} />
                  </div>
                  <Button
                    variant='secondary'
                    twStyle={[tw`min-w-[150px] bg-[#B47AC4] border-none`]}
                    onClick={() => handleClickTake(item)}
                  >
                    Take
                  </Button>
                  <span tw='bg-green text-white px-2 rounded-md max-w-max font-bold absolute -top-3 -right-3'>NEW</span>
                </div>
              )
          )}
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} twStyle={tw``}>
        <div tw='p-5 w-full text-center'>
          <div tw='p-2 rounded-md flex justify-center items-center bg-black  mb-5'>
            {returnIcon(activeCard?.class_id)}
          </div>
          <BodyText text={activeCard?.name} variant={'bold'} />
          <div tw='text-left flex flex-col'>
            <BodyText text={`Client info`} variant={'bold'} />
            <BodyText text={`Name: ${activeCard?.customer_name}`} />
            <BodyText text={`Address: ${activeCard?.address}`} />
            <BodyText text={`Mobile number: ${activeCard?.phone_number}`} />
          </div>
          <div tw='text-left flex flex-col'>
            <BodyText text={`Product info`} variant={'bold'} />
            <BodyText text={`Quantity: ${activeCard?.quantity}`} />
          </div>
        </div>
        <Button
          variant='secondary'
          twStyle={[tw`min-w-[150px] border-none`]}
          onClick={() => handleTakeOrder(activeCard?.delivery_id)}
        >
          Take
        </Button>
      </Modal>
    </>
  );
}

export default AllOrders;
