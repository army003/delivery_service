import 'twin.macro';

import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import tw from 'twin.macro';

import Logo from '@/assets/logo.png';
import { SubBody } from '@/components';
function Footer() {
  return (
    <div tw='bg-secondary'>
      <div tw='max-w-[950px] mx-auto flex w-full justify-between py-10'>
        <div tw='opacity-40'>
          <img src={Logo} alt='logo' width={120} />
        </div>
        <div tw='flex flex-col gap-2'>
          <div tw='flex items-center gap-2'>
            <div tw='p-1 bg-primary flex justify-between items-center rounded-full max-w-max'>
              <CiLocationOn size={30} color='grey' />
            </div>
            <SubBody text={'г. Алматы, Богенбай Батыра 125а'} twStyle={tw`text-secondary`} />
          </div>
          <div tw='flex items-center gap-2'>
            <div tw='p-2 bg-primary flex justify-between items-center rounded-full max-w-max'>
              <BsTelephone size={20} color='grey' />
            </div>
            <SubBody text={'+7 777 255 555 5'} twStyle={tw`text-secondary`} />
          </div>
        </div>
      </div>
      <div tw='max-w-[950px] mx-auto pb-6'>
        <hr tw='border-grey' />
        <SubBody text={'© 2023. Все права защищены.'} twStyle={tw`text-secondary`} />
      </div>
    </div>
  );
}

export default Footer;
