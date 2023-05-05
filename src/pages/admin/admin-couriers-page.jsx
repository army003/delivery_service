import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import tw from 'twin.macro';

import { useGetCouriersQuery } from '@/app/api/application';
import { BodyText, Input2, Modal, SubBody } from '@/components';

function AdminCouriersPage() {
  const { control } = useForm();
  const [open, setOpen] = useState(false);

  const { data: courier, isLoading } = useGetCouriersQuery();

  return (
    <div tw='bg-secondary rounded-2xl p-5 w-full'>
      <div tw='bg-primary rounded-2xl flex items-center px-5 w-[300px] mb-5'>
        <CiSearch size={30} />
        <Input2 control={control} name='search' placeholder={'Поиск'} />
      </div>
      {isLoading ? (
        <ClipLoader />
      ) : (
        <div tw='grid grid-cols-3 gap-5 pt-5 items-center'>
          {courier?.map(item => (
            <div tw='flex gap-2 p-2 border border-grey rounded-md items-center justify-around' key={item.id}>
              <div tw='flex flex-col gap-1 '>
                <BodyText text={item?.name} variant={'bold'} twStyle={tw`text-[rgba(129, 0, 139, 1)]`} />
                <SubBody text={item?.phone_number} />
              </div>
              <FaRegTrashAlt color='rgba(129, 0, 139, 1)' tw='cursor-pointer' size={25} onClick={() => {}} />
            </div>
          ))}
          <div tw='cursor-pointer' onClick={() => setOpen(true)}>
            <AiOutlinePlusCircle color='rgba(129, 0, 139, 1)' size={30} />
          </div>
        </div>
      )}
      <Modal open={open} setOpen={setOpen}></Modal>
    </div>
  );
}

export default AdminCouriersPage;
