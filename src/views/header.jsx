import 'twin.macro';

import React from 'react';
import { useForm } from 'react-hook-form';
import { CiSearch } from 'react-icons/ci';

import Logo from '@/assets/logo.png';
import { Input2 } from '@/components';
function Header() {
  const { control } = useForm();
  return (
    <div tw='bg-secondary py-3 shadow-sm '>
      <div tw='max-w-[950px] mx-auto flex w-full items-center justify-between'>
        <div>
          <img src={Logo} alt='logo' width={120} />
        </div>
        <div tw='bg-primary rounded-2xl flex items-center px-5 w-[300px]'>
          <CiSearch size={30} />
          <Input2 control={control} name='search' placeholder={'Поиск'} />
        </div>
        <div tw='relative'>
          {/* <CiShoppingCart color='#000' size={40} tw='cursor-pointer' /> */}
          {/* <span tw='bg-secondary border-[1px] border-black w-[23px] h-[23px] rounded-full absolute flex justify-center items-center -top-0 -right-1'>
            2
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
