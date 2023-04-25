import 'twin.macro';

import React from 'react';
import { useState } from 'react';
import { BiBed, BiCabinet, BiChair } from 'react-icons/bi';
import { GiHanger, GiMirrorMirror } from 'react-icons/gi';
import { MdOutlineTableRestaurant } from 'react-icons/md';
import tw from 'twin.macro';

import { useGetOrdersQuery } from '@/app/api/application';
import { BodyText, Button, Modal } from '@/components';
import Header from '@/views/header';

const orders = [
  {
    name: 'Some Name',
    address: 'Some Address',
    date: '21-02-2023',
    class_id: 1
  },
  {
    name: 'Some Name',
    address: 'Some Address',
    date: '21-02-2023',
    class_id: 2
  },
  {
    name: 'Some Name',
    address: 'Some Address',
    date: '21-02-2023',
    class_id: 3
  },
  {
    name: 'Some Name',
    address: 'Some Address',
    date: '21-02-2023',
    class_id: 4
  },
  {
    name: 'Some Name',
    address: 'Some Address',
    date: '21-02-2023',
    class_id: 5
  },
  {
    name: 'Some Name',
    address: 'Some Address',
    date: '21-02-2023',
    class_id: 6
  }
];

function CourierMain() {
  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const { data } = useGetOrdersQuery();
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
  return (
    <div tw='flex flex-col justify-between h-full gap-20'>
      <Header />
      <div tw='w-[950px] mx-auto'>
        <div tw='w-full grid grid-cols-4 gap-5'>
          {orders?.map(item => (
            <div tw='bg-secondary p-5 rounded-2xl flex flex-col gap-5 relative' key={item.class_id}>
              <div
                tw='p-2 rounded-md flex justify-center items-center '
                css={[
                  item.class_id === 1 && tw`bg-yellow-300`,
                  item.class_id === 2 && tw`bg-blue-300`,
                  item.class_id === 3 && tw`bg-purple`,
                  item.class_id === 4 && tw`bg-grey`,
                  item.class_id === 5 && tw`bg-pink-300`,
                  item.class_id === 6 && tw`bg-red-300`
                ]}
              >
                {returnIcon(item.class_id)}
              </div>
              <div tw='flex flex-col'>
                <BodyText text={'Name'} variant={'bold'} />
                <BodyText text={'Date'} variant={'bold'} />
                <BodyText text={'Address'} variant={'bold'} />
              </div>
              <Button
                variant='secondary'
                twStyle={[
                  tw`min-w-[150px] bg-yellow-300 border-none`,
                  item.class_id === 1 && tw`bg-yellow-300`,
                  item.class_id === 2 && tw`bg-blue-300`,
                  item.class_id === 3 && tw`bg-purple`,
                  item.class_id === 4 && tw`bg-grey`,
                  item.class_id === 5 && tw`bg-pink-300`,
                  item.class_id === 6 && tw`bg-red-300`
                ]}
                onClick={() => handleClickTake(item)}
              >
                Take
              </Button>
              <span tw='bg-green text-white px-2 rounded-md max-w-max font-bold absolute -top-3 -right-3'>NEW</span>
            </div>
          ))}
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} twStyle={tw``}>
        <div tw='p-5 w-full text-center'>
          <div tw='p-2 rounded-md flex justify-center items-center bg-black w-[200px] mb-5'>
            {returnIcon(activeCard?.class_id)}
          </div>
          <BodyText text={activeCard?.name} variant={'bold'} />
          <div tw='text-left flex flex-col'>
            <BodyText text={`Client info`} variant={'bold'} />
            <BodyText text={`Name:`} />
            <BodyText text={`Address:`} />
            <BodyText text={`Mobile number:`} />
          </div>
          <div tw='text-left flex flex-col'>
            <BodyText text={`Product info:`} variant={'bold'} />
            <BodyText text={`Quantity:`} />
          </div>
        </div>
        <Button variant='secondary' twStyle={[tw`min-w-[150px] border-none`]}>
          Take
        </Button>
      </Modal>
      {/* <Footer /> */}
    </div>
  );
}

export default CourierMain;
