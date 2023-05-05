import 'twin.macro';

import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';
import { BsFillBuildingFill, BsFillPersonPlusFill } from 'react-icons/bs';
import tw from 'twin.macro';

import AdminPhoto from '@/assets/images/admin.jpeg';
import { BigTitle, SubTitle } from '@/components';
function AdminProfilePage() {
  return (
    <div tw='flex gap-5 bg-secondary rounded-2xl w-full'>
      <div tw='rounded-2xl overflow-hidden'>
        <img src={AdminPhoto} alt='' tw='w-[300px]' />
      </div>
      <div tw='flex flex-col py-5 pr-5 justify-between'>
        <div tw='flex flex-col  gap-3'>
          <div tw='bg-[rgba(129, 0, 139, 0.2)] text-[rgba(129, 0, 139, 1)] font-bold rounded-2xl px-5 py-2 max-w-max'>
            Admin
          </div>
          <BigTitle text={'Park Jimin'} twStyle={tw``} variant={'bold'} />
          <SubTitle text={'13.10.1995'} twStyle={tw``} variant={'bold'} />
          <div tw='flex gap-2'>
            <AiTwotonePhone size={20} color='rgba(129, 0, 139, 1)' />
            <SubTitle text={'+77082994296'} twStyle={tw``} variant={'bold'} />
          </div>
          <div tw='flex gap-2'>
            <BsFillBuildingFill size={20} color='rgba(129, 0, 139, 1)' />
            <SubTitle text={'Forniture Corp.'} twStyle={tw``} variant={'bold'} />
          </div>
        </div>
        <div tw='mt-5 flex flex-col gap-2'>
          <div tw='flex gap-2 bg-[rgba(129, 0, 139, 0.2)] px-5 py-2 rounded-2xl shadow-sm cursor-pointer'>
            <BsFillPersonPlusFill size={20} color='rgba(129, 0, 139, 1)' />
            <SubTitle text={'Add supplier'} twStyle={tw`text-[rgba(129, 0, 139, 1)]`} variant={'bold'} />
          </div>
          <div tw='flex gap-2 bg-[rgba(129, 0, 139, 0.2)] px-5 py-2 rounded-2xl shadow-sm cursor-pointer'>
            <BsFillPersonPlusFill size={20} color='rgba(129, 0, 139, 1)' />
            <SubTitle text={'Add courier'} twStyle={tw`text-[rgba(129, 0, 139, 1)]`} variant={'bold'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfilePage;
