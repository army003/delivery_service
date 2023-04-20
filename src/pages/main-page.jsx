import 'twin.macro';

import React from 'react';

import Distributor from '@/assets/distributor.jpg';
import Importer from '@/assets/impoter.jpg';
import Manufacturer from '@/assets/manufacturer.jpg';
import { SubTitle } from '@/components';
function MainPage() {
  const items = ['Товар', 'Товар', 'Товар', 'Товар', 'Товар'];
  return (
    <div tw='flex flex-col gap-10'>
      <div tw='flex gap-5 font-bold '>
        <section tw='w-full rounded-lg bg-secondary cursor-pointer hover:shadow-2xl transition-shadow relative '>
          <img
            src={Manufacturer}
            alt=''
            tw='rounded-lg absolute hover:transform hover:-translate-y-4 transition-transform'
          />
        </section>
        <section tw='w-full rounded-lg bg-secondary  cursor-pointer hover:shadow-xl transition-shadow'>
          <img src={Importer} alt='' tw='rounded-lg  hover:transform hover:-translate-y-4 transition-transform' />
        </section>
        <section tw='w-full rounded-lg bg-secondary cursor-pointer hover:shadow-xl transition-shadow'>
          <img src={Distributor} alt='' tw='rounded-lg  hover:transform hover:-translate-y-4 transition-transform' />
        </section>
      </div>
      <div>
        <SubTitle text={'Название категории'} variant={'bold'} />
        <div tw='flex gap-5 font-bold mt-5'>
          {items?.map(item => (
            <section tw='w-full rounded-lg bg-secondary p-5 cursor-pointer'>{item}</section>
          ))}
        </div>
      </div>
      <div>
        <SubTitle text={'Название категории'} variant={'bold'} />
        <div tw='flex gap-5 font-bold mt-5'>
          {items?.map(item => (
            <section tw='w-full rounded-lg bg-secondary p-5 cursor-pointer'>{item}</section>
          ))}
        </div>
      </div>
      <div>
        <SubTitle text={'Название категории'} variant={'bold'} />
        <div tw='flex gap-5 font-bold mt-5'>
          {items?.map(item => (
            <section tw='w-full rounded-lg bg-secondary p-5 cursor-pointer'>{item}</section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
